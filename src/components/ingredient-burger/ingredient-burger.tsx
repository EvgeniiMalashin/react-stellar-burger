import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientBurgerStyle from "./ingredient-burger.module.css";

import { useSelector } from "../../utils/hooks";
import { useDrag } from "react-dnd/dist/hooks";
import React from "react";
import { Link } from "react-router-dom";
import { TItem } from "../../utils/types/types";


interface IIngredientBurger {
  ingredient: TItem
}

const IngredientBurger = ({ ingredient }: IIngredientBurger) => {
  const ingredientItems = useSelector((state) => state.burgerConstructor);

  const [, ref] = useDrag({
    type: 'items',
    item: ingredient
  });

  let counter = 0;
  React.useMemo(() => ingredientItems.forEach((element: TItem) =>
    element._id === ingredient._id && (element.type === 'bun' ? (counter += 2) : (counter += 1))), [ingredientItems]);

  return (
    <div className={ingredientBurgerStyle.ingredient} ref={ref}>
      <Link
        className={ingredientBurgerStyle.link}
        to={{ pathname: `/ingredients/${ingredient._id}` }}
        state={{ background: true }}
      >
        <Counter count={counter} size="default" extraClass="m-1" />
        <img src={ingredient.image} alt={ingredient.name} />
        <div className={ingredientBurgerStyle.price}>
          <p className="text text_type_digits-default">{ingredient.price}</p>
          <CurrencyIcon type="primary"/>
        </div>
        <p className={`${ingredientBurgerStyle.name} text text_type_main-default`}>{ingredient.name}</p>
      </Link>
    </div>
  );
}



export default IngredientBurger;