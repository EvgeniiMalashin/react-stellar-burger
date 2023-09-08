import { TActionFromCreators, TItem } from "../../utils/types/types";
import { GET_INGREDIENT_ERROR, GET_INGREDIENT_REQUEST, GET_INGREDIENT_SUCCESS, actionCreators } from "../actions/ingredients";

interface IIngredientsState {
  ingRequest: boolean;
  ingFailed: boolean;
  ingredients: TItem[];
}

const getIngredientsInitialState: IIngredientsState = {
  ingRequest: false,
  ingFailed: false,
  ingredients: []
}

export const getIngredientsReducer = (state = getIngredientsInitialState, action: TActionFromCreators<typeof actionCreators>) => {
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