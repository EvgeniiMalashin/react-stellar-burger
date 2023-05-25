import React from "react";
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerConstructorStyle from "./burger-constructor.module.css";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { request } from "../../utils/api";
import { ConstructorContext } from "../../services/constructor-context";

function BurgerConstructor() {
  const {constructorItem, constructorItemDispatcher} = React.useContext(ConstructorContext);  
  const [isOpen, setIsOpen] = React.useState(false);
  const [order, setOrder] = React.useState({
    data: [],
    isLoading: false,
    hasError: false
  });

  const openModal = () =>  {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const handleDeleteItem = (index) => {
    constructorItemDispatcher({type: 'delete', payload: index})
  }

  const totalPrice = React.useMemo(() =>
    constructorItem.reduce((acc, cur) => cur.type === "bun" ? acc + cur.price * 2 : acc + cur.price, 0),
    [constructorItem]
  );

  const postOrder = () => {
    const endPoint = '/orders';
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ingredients: constructorItem.map(x => x._id)})
    };
      setOrder({...order, hasError: false, isLoading: true});
      request(endPoint, options)
        .then(data => setOrder({data: data, isLoading: false, hasError: false}))
        .then(openModal)
        .catch(error => {
          setOrder({data: [], isLoading: false, hasError: true});
          console.error('Ошибка - ', error);
        });
  }
    
  return (
    <div className={burgerConstructorStyle.container}>
      <div className={burgerConstructorStyle.list}>
        {constructorItem.length > 0 && constructorItem.map((item) => item.type === 'bun' ?
          <ConstructorElement
            key={item._id}
            type="top"
            isLocked={true}
            text={`${item.name} (верх)`}
            price={item.price}
            thumbnail={item.image}
          />
        : null)}
        <ul className={burgerConstructorStyle.main}>
          {constructorItem.length > 0 && constructorItem.map((item, index) => item.type !== 'bun' ?
            <li key={item._id + index} className={burgerConstructorStyle.notBunItem}>
              <DragIcon />
              <ConstructorElement
              text={item.name}
              price={item.price}
              thumbnail={item.image}
              handleClose={() => handleDeleteItem(index)}
              />
            </li>
            : null)
          }
          </ul>
          {constructorItem.length > 0 && constructorItem.map((item) => item.type === 'bun' ?
            <ConstructorElement  
              type="bottom"   
              key={item._id}         
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
          <CurrencyIcon />
        </div>
        <Button htmlType="button" size="large" onClick={postOrder}>
          Оформить заказ
        </Button>
      </div>
      {isOpen && (
        <Modal onClose={closeModal}>
          <OrderDetails orderNumber={order.data.order.number}/>
        </Modal>)
      }
    </div>
  );
}

export default BurgerConstructor;