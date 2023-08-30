import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerIngredientsStyle from "./burger-ingredients.module.css";
import IngredientBurger from "../ingredient-burger/ingredient-burger";
import { useInView } from "react-intersection-observer";
import { useMemo, useRef, useState, useEffect } from "react";
import { useSelector } from "../../utils/hooks";
import { TItem } from "../../utils/types/types";

function BurgerIngredients() {
  const { ingredients } = useSelector((state) => state.ingredients);
  const [current, setCurrent] = useState("buns");
  const tabRefBun = useRef(null);
  const tabRefSauce = useRef(null);
  const tabRefMain = useRef(null);
  const { ref: bunsRefVisible, inView: bunsVisible } = useInView();
  const { ref: saucesRefVisible, inView: saucesVisible } = useInView();
  const { ref: mainsRefVisible, inView: mainsVisible } = useInView();

  const bun = useMemo(() => ingredients.filter((item: TItem) => item.type === 'bun'), [ingredients]);
  const sauce = useMemo(() => ingredients.filter((item: TItem) => item.type === 'sauce'), [ingredients]);
  const main = useMemo(() => ingredients.filter((item: TItem) => item.type === 'main'), [ingredients]);

  const handleTabClick = (value: string, ref: any | null) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setCurrent(value);
  };

  const handleScroll = () => {
    if (bunsVisible) {
      setCurrent("buns");
    } else if (saucesVisible) {
      setCurrent("sauces");
    } else if (mainsVisible) {
      setCurrent("mains");
    }
  };

  useEffect(() => {
    handleScroll();
  }, [bunsVisible, saucesVisible, mainsVisible]);

  return (
    <section className={burgerIngredientsStyle.section}>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <div className={burgerIngredientsStyle.menu}>
        <Tab value="buns" active={current === "buns"} onClick={(value) => handleTabClick(value, tabRefBun)}>
          Булки
        </Tab>
        <Tab value="sauces" active={current === "sauces"} onClick={(value) => handleTabClick(value, tabRefSauce)}>
          Соусы
        </Tab>
        <Tab value="mains" active={current === "mains"} onClick={(value) => handleTabClick(value, tabRefMain)}>
          Начинки
        </Tab>
      </div>
      <li className={burgerIngredientsStyle.container}>
        <h2 className="text text_type_main-medium" id="buns" ref={tabRefBun}>Булки</h2>
        <ul className={`${burgerIngredientsStyle.list} pt-6 pr-4 pl-4`} ref={bunsRefVisible}>
          {bun.map((item: TItem) => (
            <IngredientBurger ingredient={item} key={item._id} />))}
        </ul>
        <h2 className="text text_type_main-medium" id="sauces" ref={tabRefSauce}>Соусы</h2>
        <ul className={`${burgerIngredientsStyle.list} pt-6 pr-4 pl-4`} ref={saucesRefVisible}>
          {sauce.map((item: TItem) => (
            <IngredientBurger ingredient={item} key={item._id} />))}
        </ul>
        <h2 className="text text_type_main-medium" id="mains" ref={tabRefMain}>Начинки</h2>
        <ul className={`${burgerIngredientsStyle.list} pt-6 pr-4 pl-4`} ref={mainsRefVisible}>
          {main.map((item: TItem) => (
            <IngredientBurger ingredient={item} key={item._id} />))}
        </ul>
      </li>
    </section>
  );
}

export default BurgerIngredients;
