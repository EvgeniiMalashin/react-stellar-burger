import { useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "../../utils/hooks";
import { useDrop } from "react-dnd";
import update from 'immutability-helper';
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import MovementElement from "../movement-element/movement-element";
import OrderDetails from "../order-details/order-details";
import { ADD_ITEM, MOVE_ITEMS } from "../../services/actions/burger-constructor";
import { postOrder } from "../../utils/postOrder";
import { CLOSE_ORDER } from "../../services/actions/popup";
import burgerConstructorStyle from "./burger-constructor.module.css";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { TItem } from "../../utils/types/types";

function BurgerConstructor() {
  const dispatch = useDispatch();
  const constructorItem = useSelector((state) => state.burgerConstructor);
  const orderDetails = useSelector((state) => state.orderDetails);
  
  const navigate = useNavigate();
  const user = useSelector((store) => store.user.isLoggedIn);

  const [, dropTarget] = useDrop({
    accept: 'items',
    drop(item: TItem) {

      dispatch({
        type: ADD_ITEM,
        payload: {
          ...item,
          uuid: uuidv4(),
        }

      })
    }
  });

  const closeModal = () => {
    dispatch({
      type: CLOSE_ORDER
    })
  };

  const totalPrice = useMemo(() =>
    constructorItem.reduce((acc: number, cur: TItem) => cur.type === "bun" ? acc + cur.price * 2 : acc + cur.price, 0),
    [constructorItem]
  );

  const requestOptions = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Authorization: window.localStorage.getItem("accessToken"),
    },
    body: JSON.stringify({ ingredients: constructorItem.map((x: TItem) => x._id) })
  };

  const createOrder = () => {
    if (user) {
      dispatch(postOrder(requestOptions));

    } else {
      navigate('/login');
    }
  };
  
  const moveItem = useCallback((dragIndex, hoverIndex) => {
    
    const bunsIngredients = constructorItem.filter(item => item.type === 'bun')
    const otherIngredients = constructorItem.filter(item => item.type !== 'bun')
  
    const sortedIngredients = update(otherIngredients, {
      $splice:
        [
          [dragIndex, 1],
          [hoverIndex, 0, otherIngredients[dragIndex]],
        ],
    })
    const sortedItemsWithBuns = [...bunsIngredients, ...sortedIngredients]
    
    dispatch({
      type: MOVE_ITEMS,
      payload: [...sortedItemsWithBuns]
    });
  }, [constructorItem, dispatch]);

  const hasBun = useMemo(
    () => constructorItem.some(item => item.type === 'bun'),
    [constructorItem]
  );



  return (
    <div className={burgerConstructorStyle.container} ref={dropTarget}>
      <div className={burgerConstructorStyle.list}>
        {constructorItem.length > 0 && constructorItem.map((item: TItem) => item.type === 'bun' ?
          <ConstructorElement
            key={item.uuid}
            type="top"
            isLocked={true}
            text={`${item.name} (верх)`}
            price={item.price}
            thumbnail={item.image}
          />
          : null)}
        <ul className={burgerConstructorStyle.main}>
          {constructorItem.length > 0 && constructorItem.map((item: TItem, index: number) => item.type !== 'bun' ?
            <li key={item.uuid} className={burgerConstructorStyle.notBunItem}>
              <DragIcon type="secondary" />
              <MovementElement
                ingredient={item}
                index={index}
                moveItem={moveItem}
                id={`${item._id}${index}`} />
            </li>
            : null)
          }
        </ul>
        {constructorItem.length > 0 && constructorItem.map((item: TItem) => item.type === 'bun' ?
          <ConstructorElement
            key={item.uuid}
            type="bottom"
            isLocked={true}
            text={`${item.name} (низ)`}
            price={item.price}
            thumbnail={item.image}
          />
          : null)}
      </div>
      <div className={burgerConstructorStyle.order}>
        <div className={burgerConstructorStyle.cost}>
          <p className="text text_type_digits-medium">{totalPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" size="large" onClick={createOrder} disabled={!hasBun || false}>
          Оформить заказ
        </Button>
      </div>
      {orderDetails.visible && (
        <Modal onClose={closeModal} title="">
          <OrderDetails />
        </Modal>)
      }
    </div>
  );
}

export default BurgerConstructor;