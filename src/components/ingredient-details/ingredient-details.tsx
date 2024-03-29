import ingredientDetails from "./ingredient-details.module.css";
import { useSelector } from "../../utils/hooks";
import { useParams } from "react-router-dom";
import { TItem } from "../../utils/types/types";


function IngredientDetails() {
  const { id } = useParams();
  const ingredients = useSelector((store) => store.ingredients.ingredients);
  const ingredient = ingredients.find((item: TItem) => item._id === id);

  if (!ingredient) return null

  return (
    <div className={ingredientDetails.container}>
      <img src={ingredient.image_large} alt={ingredient.name}></img>
      <p className="text text_type_main-medium">{ingredient.name}</p>
      <ul className={ingredientDetails.list}>
        <li className={ingredientDetails.value}>
          <p className="text text_type_main-default text_color_inactive">Калории, ккал</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredient.calories}</p>
        </li>
        <li className={ingredientDetails.value}>
          <p className="text text_type_main-default text_color_inactive">Белки, г</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredient.proteins}</p>
        </li>
        <li className={ingredientDetails.value}>
          <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredient.fat}</p>
        </li>
        <li className={ingredientDetails.value}>
          <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
          <p className="text text_type_digits-default text_color_inactive">{ingredient.carbohydrates}</p>
        </li>
      </ul>
    </div>
  );
}

export default IngredientDetails;