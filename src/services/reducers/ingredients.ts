import { GET_INGREDIENT_ERROR, GET_INGREDIENT_REQUEST, GET_INGREDIENT_SUCCESS } from "../actions/ingredients";

const getIngredientsInitialState = {
  ingRequest: false,
  ingFailed: false,
  ingredients: []
}

export const getIngredientsReducer = (state = getIngredientsInitialState, action: any) => {
  switch (action.type) {
    case GET_INGREDIENT_REQUEST: {
      return {
        ...state,
        ingRequest: true,
        ingFailed: false,
      };
    }
    case GET_INGREDIENT_SUCCESS: {
      return {
        ...state,
        ingredients: action.ingredients,
        ingRequest: false
      };
    }
    case GET_INGREDIENT_ERROR: {
      return {
        ...state,
        ingFailed: true,
        ingRequest: false,
        ingredients: []
      };
    }
    default: {
      return state
    }
  }
}