import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerIngredientsStyle from "./burger-ingredients.module.css";
import IngredientBurger from "../ingredient-burger/ingredient-burger";
import Modal from "../modal/modal";
import { IngredientsContext } from "../../services/ingredients-context";
import { ConstructorContext } from "../../services/constructor-context";

function BurgerIngredients() {
    const {ingredientsList} = React.useContext(IngredientsContext);
    const [current, setCurrent] = React.useState("buns");
    const [isIngredientModalOpen, setIsIngredientModalOpen] = React.useState(false);
    const [IngredientModal, setIngredientModal] = React.useState(null);
    const {constructorItemDispatcher} = React.useContext(ConstructorContext);  
    const tabRefBun = React.useRef(null);
    const tabRefSauce = React.useRef(null);
    const tabRefMain = React.useRef(null);
    
    // const openModal = (element) => {
    //   setIsIngredientModalOpen(true);
    //   setIngredientModal(element);
    // };

    const closeModal = () => {
      setIsIngredientModalOpen(false);
      setIngredientModal(null);
    };

    const handleAddItem = (ingredient) => {
      constructorItemDispatcher({type: 'add', payload: ingredient})
    };      
    
    function executeScroll(selectTab) {
      setCurrent(selectTab);
      const item = document.getElementById(selectTab);
      if (item) {
        return item.scrollIntoView({ behavior: "smooth" });
      }
    }

  return (
      <section className={burgerIngredientsStyle.section}>
        <h1 className="text text_type_main-large">Соберите бургер</h1>
        <div className={burgerIngredientsStyle.menu}>
          <Tab value="buns" active={current === "buns"} onClick={executeScroll}>
            Булки
          </Tab>
          <Tab value="sauces" active={current === "sauces"} onClick={executeScroll}>
            Соусы
          </Tab>
          <Tab value="mains" active={current === "mains"} onClick={executeScroll}>
            Начинки
          </Tab>
        </div>
        <li className={burgerIngredientsStyle.container}>
          <h2 className="text text_type_main-medium" id="buns" ref={tabRefBun}>Булки</h2>
          <ul className={`${burgerIngredientsStyle.list} pt-6 pr-4 pl-4`}>
            {ingredientsList.data.map((item) => item.type === 'bun' &&
              <IngredientBurger ingredient={item} key={item._id}  /*openModal={openModal}*/ handleAddItem={handleAddItem} />)}
          </ul>
          <h2 className="text text_type_main-medium" id="sauces" ref={tabRefSauce}>Соусы</h2>
          <ul className={`${burgerIngredientsStyle.list} pt-6 pr-4 pl-4`}>
            {ingredientsList.data.map((item) => item.type === 'sauce' &&   
              <IngredientBurger ingredient={item} key={item._id}  /*openModal={openModal}*/ handleAddItem={handleAddItem} />)}
          </ul>
          <h2 className="text text_type_main-medium" id="mains" ref={tabRefMain}>Начинки</h2>
          <ul className={`${burgerIngredientsStyle.list} pt-6 pr-4 pl-4`}>
            {ingredientsList.data.map((item) => item.type === 'main' &&
              <IngredientBurger ingredient={item} key={item._id}  /*openModal={openModal}*/ handleAddItem={handleAddItem} />)}
          </ul>
        </li>
        {isIngredientModalOpen && (
          <Modal onClose={closeModal} title="Детали ингредиента">
            {IngredientModal}
          </Modal>)
        }
      </section>
  );
}



export default BurgerIngredients;
