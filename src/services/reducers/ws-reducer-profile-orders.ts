
import { TActionFromCreators, TWsOrders } from "../../utils/types/types";
import {
    WS_PROFILE_CONNECTION_SUCCESS,
    WS_PROFILE_CONNECTION_ERROR,
    WS_PROFILE_CONNECTION_CLOSED,
    WS_PROFILE_GET_ORDERS,
    actionCreator,
  } from "../actions/ws-actions-profile-orders";

  
  type TStore = {
    wsConnected: boolean,
    profileOrders?: any,
    error?: string    
  }
  
  const initialState = {
    wsConnected: false,
  };
  
  export const wsProfileReducer = (state: TStore = initialState, action: any) => {
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