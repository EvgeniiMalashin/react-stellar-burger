import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerIngredientsStyle from "./burger-ingredients.module.css";
import IngredientBurger from "../ingredient-burger/ingredient-burger";
import { useDispatch, useSelector } from "react-redux";
import { getIngredients } from "../../utils/getIngredients";

const items = (state) => state.ingredients;

function BurgerIngredients() {
  const { ingredients } = useSelector(items);
  const dispatch = useDispatch();
  const [current, setCurrent] = React.useState("buns");
  const tabRefBun = React.useRef(null);
  const tabRefSauce = React.useRef(null);
  const tabRefMain = React.useRef(null);

  React.useEffect(() => {
    dispatch(getIngredients())
  }, []);

  function executeScroll(selectTab) {
    setCurrent(selectTab);
    const item = document.getElementById(selectTab);
    if (item) {
      return item.scrollIntoView({ behavior: "smooth" });
    }
  };

  const bun = React.useMemo(() => ingredients.filter((item) => item.type === 'bun'), [ingredients]);
  const sauce = React.useMemo(() => ingredients.filter((item) => item.type === 'sauce'), [ingredients]);
  const main = React.useMemo(() => ingredients.filter((item) => item.type === 'main'), [ingredients]);

  const handleScroll = (val) => {
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
          {bun.map((item) => (
            <IngredientBurger ingredient={item} key={item._id} />))}
        </ul>
        <h2 className="text text_type_main-medium" id="sauces" ref={tabRefSauce}>Соусы</h2>
        <ul className={`${burgerIngredientsStyle.list} pt-6 pr-4 pl-4`}>
          {sauce.map((item) => (
            <IngredientBurger ingredient={item} key={item._id} />))}
        </ul>
        <h2 className="text text_type_main-medium" id="mains" ref={tabRefMain}>Начинки</h2>
        <ul className={`${burgerIngredientsStyle.list} pt-6 pr-4 pl-4`}>
          {main.map((item) => (
            <IngredientBurger ingredient={item} key={item._id} />))}
        </ul>
      </li>
    </section>
  );
}

export default BurgerIngredients;
