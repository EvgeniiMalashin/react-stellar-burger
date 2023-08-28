import { type } from "@testing-library/user-event/dist/type";
import { TActionFromCreators } from "../../utils/types/types";
import { TWsOrders } from "../../utils/types/types";
import { actionCreators,
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_ORDERS,
  } from "../actions/ws-actions-orders";
  

  type TStore = {
    wsConnected: boolean,
    orders?: TWsOrders,
    error?: string    
  }
  
  const initialState = {
    wsConnected: false,
    
  };
  
  export const wsReducer = (state: TStore = initialState, action: TActionFromCreators<typeof actionCreators>) => {
    switch (action.type) {
      case WS_CONNECTION_SUCCESS:
        return {
          ...state,
          error: undefined,
          wsConnected: true,
        };
      case WS_CONNECTION_ERROR:
        return {
          ...state,
          error: action.payload,
          wsConnected: false,
        };
      case WS_CONNECTION_CLOSED:
        return {
          ...state,
          error: undefined,
          wsConnected: false,
        };
  
      case WS_GET_ORDERS:
        return {
          ...state,
          error: undefined,
          orders: action.payload
        };
      default:
        return state;
    }
  };