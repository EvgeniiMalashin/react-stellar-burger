import {
    WS_PROFILE_CONNECTION_SUCCESS,
    WS_PROFILE_CONNECTION_ERROR,
    WS_PROFILE_CONNECTION_CLOSED,
    WS_PROFILE_GET_ORDERS,
  } from "../actions/ws-actions-profile-orders";
  
  const initialState = {
    wsConnected: false,
    profileOrders: null,
    error: undefined,
  };
  
  export const wsProfileReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case WS_PROFILE_CONNECTION_SUCCESS:
        return {
          ...state,
          error: undefined,
          wsConnected: true,
        };
      case WS_PROFILE_CONNECTION_ERROR:
        return {
          ...state,
          error: action.payload,
          wsConnected: false,
        };
      case WS_PROFILE_CONNECTION_CLOSED:
        return {
          ...state,
          error: undefined,
          wsConnected: false,
        };
  
      case WS_PROFILE_GET_ORDERS:
        return {
          ...state,
          error: undefined,
          profileOrders: action.payload,
        };
      default:
        return state;
    }
  };