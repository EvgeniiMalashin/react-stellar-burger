import IngredientDetails from "../components/ingredient-details/ingredient-details";
import ingredientStyles from "./ingredient.module.css";

const IngredientPage: React.FC = () => {
  return (
    <div>
      <h2 className={`${ingredientStyles.heading} text text_type_main-large`}>Детали ингредиента</h2>
      <IngredientDetails />
    </div>
  )
}

export default IngredientPage;

