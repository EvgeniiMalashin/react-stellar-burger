import { request } from "./api";
import { GET_INGREDIENT_REQUEST, GET_INGREDIENT_SUCCESS, GET_INGREDIENT_ERROR } from "../services/actions/ingredients";

export function getIngredients() {
  return function (dispatch) {
    const endPoint = '/ingredients';
    dispatch({
      type: GET_INGREDIENT_REQUEST
    });
    request(endPoint)
      .then(res => dispatch({
        type: GET_INGREDIENT_SUCCESS,
        ingredients: res.data
      }))
      .catch(err => {
        dispatch({
          type: GET_INGREDIENT_ERROR
        });
      });
  };
}
