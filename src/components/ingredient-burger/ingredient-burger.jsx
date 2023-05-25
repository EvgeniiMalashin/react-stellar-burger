import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientBurgerStyle from "./ingredient-burger.module.css";
import {ingredientPropType} from "../../utils/prop-types.js";
import PropTypes from "prop-types";

const IngredientBurger = ({ingredient, handleAddItem}) => {
  return (
    <div className={ingredientBurgerStyle.ingredient} onClick={() => {
      handleAddItem(ingredient)
  }}>
      <Counter count={1} size="default" extraClass="m-1" />
      <img src={ingredient.image} alt={ingredient.name} />
        <div className={ingredientBurgerStyle.price}>
          <p className="text text_type_digits-default">{ingredient.price}</p>
          <CurrencyIcon />
        </div>
        <p className={`${ingredientBurgerStyle.name} text text_type_main-default`}>{ingredient.name}</p>
    </div>
  );
}

IngredientBurger.propTypes = {
  ingredient: ingredientPropType.isRequired,
  handleAddItem: PropTypes.func.isRequired
}

export default IngredientBurger;