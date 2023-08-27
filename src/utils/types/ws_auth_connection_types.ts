
import {TWsOrders} from "../types/types"

export enum WsAuthTypes {
    WS_AUTH_CONNECTION_SUCCESS = "WS_AUTH_CONNECTION_SUCCESS",
    WS_AUTH_CONNECTION_ERROR = "WS_AUTH_CONNECTION_ERROR",
    WS_AUTH_CONNECTION_OPEN = "WS_AUTH_CONNECTION_OPEN",
    WS_AUTH_CONNECTION_CLOSED = "WS_AUTH_CONNECTION_CLOSED",
    WS_AUTH_GET_ORDERS = "WS_AUTH_GET_ORDERS",
    WS_AUTH_SEND_DATA = "WS_AUTH_SEND_DATA",
  }
  
  export interface IWsAuthConnectionSuccess {
    readonly type: WsAuthTypes.WS_AUTH_CONNECTION_SUCCESS;
  }
  
  export interface IWsAuthConnectionErr {
    readonly type: WsAuthTypes.WS_AUTH_CONNECTION_ERROR;
    payload: any
  }
  
  export interface IWsAuthConnectionOpen {
    readonly type: WsAuthTypes.WS_AUTH_CONNECTION_OPEN;
  }
  
  export interface IWsAuthConnectionClosed {
    readonly type: WsAuthTypes.WS_AUTH_CONNECTION_CLOSED;
  }
  
  export interface IWsAuthGetOrders {
    readonly type: WsAuthTypes.WS_AUTH_GET_ORDERS;
    payload: TWsOrders
  }
  
  export interface IWsAuthSendData {
    readonly type: WsAuthTypes.WS_AUTH_SEND_DATA;
    payload: object
  }
  
  