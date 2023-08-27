import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerIngredientsStyle from "./burger-ingredients.module.css";
import IngredientBurger from "../ingredient-burger/ingredient-burger";
import { useSelector } from "react-redux";
import { RootState } from "../../services/store";
import { TItem } from "../../utils/types/types";

const items = (state: RootState) => state.ingredients;

function BurgerIngredients() {
  const { ingredients } = useSelector(items);
  const [current, setCurrent] = React.useState("buns");
  const tabRefBun = React.useRef(null);
  const tabRefSauce: any = React.useRef(null);
  const tabRefMain: any = React.useRef(null);

  function executeScroll(selectTab: any) {
    setCurrent(selectTab);
    const item = document.getElementById(selectTab);
    if (item) {
      return item.scrollIntoView({ behavior: "smooth" });
    }
  };

  const bun = React.useMemo(() => ingredients.filter((item: TItem) => item.type === 'bun'), [ingredients]);
  const sauce = React.useMemo(() => ingredients.filter((item: TItem) => item.type === 'sauce'), [ingredients]);
  const main = React.useMemo(() => ingredients.filter((item: TItem) => item.type === 'main'), [ingredients]);

  const handleScroll = (val: any) => {
    if (val.target.scrollTop < tabRefSauce.current.offsetTop) {
      setCurrent("buns")
    } else if (val.target.scrollTop < tabRefMain.current.offsetTop) {
      setCurrent("sauces")
    } else {
      setCurrent("mains")
    }
  };

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
      <li className={burgerIngredientsStyle.container} onScroll={handleScroll}>
        <h2 className="text text_type_main-medium" id="buns" ref={tabRefBun}>Булки</h2>
        <ul className={`${burgerIngredientsStyle.list} pt-6 pr-4 pl-4`}>
          {bun.map((item: TItem) => (
            <IngredientBurger ingredient={item} key={item._id} />))}
        </ul>
        <h2 className="text text_type_main-medium" id="sauces" ref={tabRefSauce}>Соусы</h2>
        <ul className={`${burgerIngredientsStyle.list} pt-6 pr-4 pl-4`}>
          {sauce.map((item: TItem) => (
            <IngredientBurger ingredient={item} key={item._id} />))}
        </ul>
        <h2 className="text text_type_main-medium" id="mains" ref={tabRefMain}>Начинки</h2>
        <ul className={`${burgerIngredientsStyle.list} pt-6 pr-4 pl-4`}>
          {main.map((item: TItem) => (
            <IngredientBurger ingredient={item} key={item._id} />))}
        </ul>
      </li>
    </section>
  );
}

export default BurgerIngredients;
