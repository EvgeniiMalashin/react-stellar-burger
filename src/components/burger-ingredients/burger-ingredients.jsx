import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerIngredientsStyle from "./burger-ingredients.module.css";
import BurgerComponents from "../burger-components/burger-components";
import Modal from "../modal/modal";
import {ingredientPropType} from "../../utils/prop-types"
import PropTypes from "prop-types";

function BurgerIngredients({ingredient}) {
    const [current, setCurrent] = React.useState("buns");
    const [isIngredientModalOpen, setIsIngredientModalOpen] = React.useState(false);
    const [IngredientModal, setIngredientModal] = React.useState(null);

    const openModal = (element) => {
      setIsIngredientModalOpen(true);
      setIngredientModal(element);
    }

    const closeModal = () => {
      setIsIngredientModalOpen(false);
      setIngredientModal(null);
    }

    const Tabs = {
      bun: "bun",
      sauce: "sauce",
      main: "main"
    }
    const buns = ingredient.filter((item) => item.type === Tabs.bun); 
    const mains = ingredient.filter((item) => item.type === Tabs.main); 
    const sauces = ingredient.filter((item) => item.type === Tabs.sauce); 

    const ingredientsForBurgerRef = React.useRef();

    const scrollRef = React.useRef(null);
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
        <div className={burgerIngredientsStyle.container}>
          <h2 className="text text_type_main-medium" id="buns" ref={ingredientsForBurgerRef}>Булки</h2>
          <BurgerComponents ingredients={buns} ref={scrollRef} openModal={openModal} />
          <h2 className="text text_type_main-medium" id="sauces" ref={ingredientsForBurgerRef}>Соусы</h2>
          <BurgerComponents ingredients={sauces} ref={scrollRef} openModal={openModal} />
          <h2 className="text text_type_main-medium" id="mains" ref={ingredientsForBurgerRef}>Начинки</h2>
          <BurgerComponents ingredients={mains} ref={scrollRef} openModal={openModal} />
        </div>
        {isIngredientModalOpen && (
          <Modal onClose={closeModal} title="Детали ингредиента">
            {IngredientModal}
          </Modal>)
        }
      </section>
  );
}

BurgerIngredients.propTypes = {
  ingredient: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
}

export default BurgerIngredients;
