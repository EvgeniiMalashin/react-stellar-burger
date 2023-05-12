import React from "react";
import burgerComponentsStyle from "./burger-components.module.css";
import IngredientBurger from "../ingredient-burger/ingredient-burger";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {ingredientPropType} from "../../utils/prop-types";
import PropTypes from "prop-types";

const BurgerComponents = React.forwardRef(({ingredients, openModal}, ref) => {

  return (
    <>
      <div className={burgerComponentsStyle.list} ref={ref}>
        {ingredients.map((ingredient) => (
          <IngredientBurger 
          key={ingredient._id} 
          ingredient={ingredient} 
          onClick={() => {
            openModal(<IngredientDetails ingredient={ingredient}/>)
          }} 
          />
        ))}
      </div>
    </>
  );
})

BurgerComponents.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
  openModal: PropTypes.func.isRequired
}

export default BurgerComponents;

