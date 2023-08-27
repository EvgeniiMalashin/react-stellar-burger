export enum OrderTypes {
  GET_ORDER_REQUEST = "GET_ORDER_REQUEST",
  GET_ORDER_OK = "GET_ORDER_OK",
  GET_ORDER_ERROR = "GET_ORDER_ERROR",
}

export interface IGetOrderOk {
  readonly type: OrderTypes.GET_ORDER_OK;
  orderNumber: number;
}

export interface IGetOrderReq {
  readonly type: OrderTypes.GET_ORDER_REQUEST;
}

export interface IGetOrderErr {
  readonly type: OrderTypes.GET_ORDER_ERROR;
}

