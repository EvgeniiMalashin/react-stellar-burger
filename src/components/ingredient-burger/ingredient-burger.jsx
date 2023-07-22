import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientBurgerStyle from "./ingredient-burger.module.css";
import { ingredientPropType } from "../../utils/prop-types.js";
import { useSelector } from "react-redux";
import { useDrag } from "react-dnd/dist/hooks";
import React from "react";
import { Link } from "react-router-dom";

const ingredients = (state) => state.burgerConstructor;

const IngredientBurger = ({ ingredient }) => {
  const ingredientItems = useSelector(ingredients);

  const [, ref] = useDrag({
    type: 'items',
    item: ingredient
  });

  let counter = 0;
  React.useMemo(() => ingredientItems.forEach(element =>
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
          <CurrencyIcon />
        </div>
        <p className={`${ingredientBurgerStyle.name} text text_type_main-default`}>{ingredient.name}</p>
      </Link>
    </div>
  );
}

IngredientBurger.propTypes = {
  ingredient: ingredientPropType.isRequired
}

export default IngredientBurger;