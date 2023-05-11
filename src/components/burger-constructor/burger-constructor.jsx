import React from "react";
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerConstructorStyle from "./burger-constructor.module.css";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import {ingredientPropType} from "../../utils/prop-types";
import PropTypes from "prop-types";

function BurgerConstructor({ingredient}) {
  
    const notBun = ingredient.filter((item) => item.type !== "bun");  
    const bun = ingredient.find((item) => item.type === "bun")  

    const [isOpen, setIsOpen] = React.useState(false);

    const openModal = () =>  {
      setIsOpen(true);
    }

    const closeModal = () => {
      setIsOpen(false);
    }
    
    return (
      <div className={burgerConstructorStyle.container}>
        <div className={burgerConstructorStyle.list}>
          {bun ? (
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          ): null}
          <ul className={burgerConstructorStyle.main}>
            {notBun.map((ingredient) => {
              return (
                <li key={ingredient._id} className={burgerConstructorStyle.sauce}>
                  <DragIcon />
                  <ConstructorElement
                    text={ingredient.name}
                    price={ingredient.price}
                    thumbnail={ingredient.image}
                  />
                </li>
              );
            })}
          </ul>
          {bun ? (
            <ConstructorElement  
              type="bottom"            
              isLocked={true}
              text={`${bun.name} (низ)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          ): null}
        </div>
        <div className={burgerConstructorStyle.order}>
          <div className={burgerConstructorStyle.cost}>
            <p className="text text_type_digits-medium">610</p>
            <CurrencyIcon />
          </div>
          <Button size="large" onClick={openModal}>
            Оформить заказ
          </Button>
        </div>
        {isOpen && (
          <Modal onClose={closeModal}>
            <OrderDetails />
          </Modal>)
        }
      </div>
    );
}

BurgerConstructor.propTypes = {
  ingredient: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired
}

export default BurgerConstructor;