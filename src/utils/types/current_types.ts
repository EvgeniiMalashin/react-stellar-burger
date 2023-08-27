import { TOrder, TItem } from "./types";

export enum CurrentTypes {
  ADD_CURRENT_ING = "ADD_CURRENT_ING",
  REMOVE_CURRENT_ING = "REMOVE_CURRENT_ING",
  ADD_CURRENT_ORDER = "ADD_CURRENT_ORDER",
  REMOVE_CURRENT_ORDER = "REMOVE_CURRENT_ORDER",
}

export interface IAddCurrentIngAction {
  readonly type: CurrentTypes.ADD_CURRENT_ING;
  item: TItem
}

export interface IRemoveCurrentIngAction {
  readonly type: CurrentTypes.REMOVE_CURRENT_ING;
}

export interface IAddCurrentOrderAction {
  readonly type: CurrentTypes.ADD_CURRENT_ORDER;
  item: TOrder
}

export interface IRemoveCurrentOrderAction {
  readonly type: CurrentTypes.REMOVE_CURRENT_ORDER;
}


