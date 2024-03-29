import { TActionFromCreators } from "../../utils/types/types";
import { OPEN_DETAILS, OPEN_ORDER, CLOSE_DETAILS, CLOSE_ORDER } from "../actions/popup";
import { actionCreators } from "../actions/popup";

const ingredientInitialState = {
  visible: false,
  currentItem: {}
}
export const ingredientReducer = (state = ingredientInitialState, action: TActionFromCreators<typeof actionCreators>) => {
  switch (action.type) {
    case OPEN_DETAILS: {
      return {
        ...state,
        visible: true,
        currentItem: action.payload,
      };
    }
    case CLOSE_DETAILS: {
      return {
        ...state,
        visible: false,
        currentItem: {},
      };
    }
    default: {
      return state;
    }
  }
};

const orderInitialState = {
  visible: false
}
export const orderReducer = (state = orderInitialState, action: TActionFromCreators<typeof actionCreators>) => {
  switch (action.type) {
    case OPEN_ORDER: {
      return {
        ...state,
        visible: true
      };
    }
    case CLOSE_ORDER: {
      return {
        ...state,
        visible: false
      };
    }
    default: {
      return state;
    }
  }
};