import {
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_ORDERS,
  } from "../actions/ws-actions-orders";
  
  const initialState = {
    wsConnected: false,
    orders: null,
    error: undefined,
  };
  
  export const wsReducer = (state = initialState, action: any) => {
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