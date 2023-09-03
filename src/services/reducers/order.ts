
import { POST_ORDER_ERROR, POST_ORDER_REQUEST, POST_ORDER_SUCCESS, ADD_CURRENT_ORDER, REMOVE_CURRENT_ORDER } from "../actions/order";


import { actionCreators } from "../actions/order";
import { TActionFromCreators } from "../../utils/types/types";
import { TOrder } from "../../utils/types/types";
interface IPostOrderInitialState {
  orderNumber: number;
  orderRequest: boolean;
  orderFailed: boolean;
  success: boolean
}

const postOrderInitialState: IPostOrderInitialState = {
  orderNumber: 0,
  orderRequest: false,
  orderFailed: false,
  success: false
}
export const postOrderReducer = (state = postOrderInitialState, action: TActionFromCreators<typeof actionCreators>) => {
  switch (action.type) {
    case POST_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
        orderFailed: false,
      };
    }
    case POST_ORDER_SUCCESS: {
      
      return {
        ...state,
        orderNumber: action.data.order.number,
        orderRequest: false,
        success: true
      };
    }

    case POST_ORDER_ERROR: {
      return {
        ...state,
        orderFailed: true,
        orderRequest: false,
        order: ''
      };
    }
    
    default: {
      return state
    }
  }
};

interface ICurrentState {
  currentOrder: TOrder | null;
}

const initialState: ICurrentState = {
  currentOrder: null,
};

export const currentOrderReducer = (state = initialState, action: TActionFromCreators<typeof actionCreators>) => {
  switch (action.type) {
    case ADD_CURRENT_ORDER:
      return { ...state, currentOrder: action.item };
    case REMOVE_CURRENT_ORDER:
      return { ...state, currentOrder: null};
    default:
      return state;
  }
};

export default currentOrderReducer;