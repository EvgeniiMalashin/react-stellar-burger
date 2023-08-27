import { TWsOrders } from "./types";

export enum WsTypes {
  WS_CONNECTION_SUCCESS = "WS_CONNECTION_SUCCESS",
  WS_CONNECTION_ERROR = "WS_CONNECTION_ERROR",
  WS_CONNECTION_OPEN = "WS_CONNECTION_OPEN",
  WS_CONNECTION_CLOSED = "WS_CONNECTION_CLOSED",
  WS_GET_ORDERS = "WS_GET_ORDERS",
  WS_SEND_DATA = "WS_SEND_DATA",
}

export interface IWsConnectionSuccess {
  readonly type: WsTypes.WS_CONNECTION_SUCCESS;
}

export interface IWsConnectionErr {
  readonly type: WsTypes.WS_CONNECTION_ERROR;
  payload: any
}

export interface IWsConnectionOpen {
  readonly type: WsTypes.WS_CONNECTION_OPEN;
}

export interface IWsConnectionClosed {
  readonly type: WsTypes.WS_CONNECTION_CLOSED;
}

export interface IWsGetOrders {
  readonly type: WsTypes.WS_GET_ORDERS;
  payload: TWsOrders
}

export interface IWsSendData {
  readonly type: WsTypes.WS_SEND_DATA;
  payload: object
}

