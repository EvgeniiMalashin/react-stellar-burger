import { TWsOrders } from "../../utils/types/types";

export const WS_PROFILE_CONNECTION_SUCCESS: 'WS_AUTH_CONNECTION_SUCCESS' = 'WS_AUTH_CONNECTION_SUCCESS';
export const WS_PROFILE_CONNECTION_ERROR: 'WS_AUTH_CONNECTION_ERROR' = 'WS_AUTH_CONNECTION_ERROR';
export const WS_PROFILE_CONNECTION_OPEN: 'WS_AUTH_CONNECTION_OPEN' = 'WS_AUTH_CONNECTION_OPEN';
export const WS_PROFILE_CONNECTION_CLOSED: 'WS_AUTH_CONNECTION_CLOSED' = 'WS_AUTH_CONNECTION_CLOSED';
export const WS_PROFILE_GET_ORDERS: 'WS_AUTH_GET_ORDERS' = 'WS_AUTH_GET_ORDERS';
export const WS_PROFILE_SEND_DATA: 'WS_AUTH_SEND_DATA' = 'WS_AUTH_SEND_DATA';

export const wsProfileActions = {
  wsInit: WS_PROFILE_CONNECTION_SUCCESS,
  onError: WS_PROFILE_CONNECTION_ERROR,
  onOpen: WS_PROFILE_CONNECTION_OPEN,
  onClose: WS_PROFILE_CONNECTION_CLOSED,
  onMessage: WS_PROFILE_GET_ORDERS,
  wsSendData: WS_PROFILE_SEND_DATA,
};

export const wsProfileConnectionInit = () => {
	return {
	  type: WS_PROFILE_CONNECTION_SUCCESS,
	};
  };

  export const wsProfileConnectionOpen = () => {
	return {
	  type: WS_PROFILE_CONNECTION_OPEN,
	};
  };

  export const wsProfileConnectionClose = () => {
	return {
	  type: WS_PROFILE_CONNECTION_CLOSED,
	};
  };

  export const wsProfileConnectionError = (error: string) => {
	return {
	  type: WS_PROFILE_CONNECTION_ERROR,
	  payload: error
	};
  };

  export const wsProfileGetOrders = (data: TWsOrders) => {
	return {
	  type: WS_PROFILE_GET_ORDERS,
	  payload: data,
	};
  };

  export const wsProfileSendData = (data: object) => {
	return {
	  type: WS_PROFILE_SEND_DATA,
	  payload: data,
	};
  };

  export const actionCreator = {
    wsProfileConnectionInit,
	wsProfileConnectionOpen,
	wsProfileConnectionClose,
	wsProfileConnectionError,
	wsProfileGetOrders,
	wsProfileSendData
  }