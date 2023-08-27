import { TItem } from "./types";

export enum ConstructorTypes {
  REMOVE_INGREDIENT = "REMOVE_INGREDIENT",
  ADD_BUN = "ADD_BUN",
  UPDATE_BUN = "UPDATE_BUN",
  ADD_INGREDIENT = "ADD_INGREDIENT",
  INCREMENT = "INCREMENT",
  INCREMENT_BUN = "INCREMENT_BUN",
  DECREMENT = "DECREMENT",
  SORT_INGREDIENTS = "SORT_INGREDIENTS",
  CLEAR_INGREDIENTS = "CLEAR_INGREDIENTS",
  CLEAR_TOTAL = "CLEAR_TOTAL",
}

export interface IRemoveIngredientAction {
  readonly type: ConstructorTypes.REMOVE_INGREDIENT;
  index: number;
}

export interface IAddBunAction {
  readonly type: ConstructorTypes.ADD_BUN;
  payload: { item: TItem };
}

export interface IUpdateBunAction {
  readonly type: ConstructorTypes.UPDATE_BUN;
}

export interface IAddIngredientAction {
  readonly type: ConstructorTypes.ADD_INGREDIENT;
  payload: { item: TItem; uuid: string };
}

export interface IIncrementAction {
  readonly type: ConstructorTypes.INCREMENT;
  payload: { item: TItem; price: number };
}
export interface IIncrementBunAction {
  readonly type: ConstructorTypes.INCREMENT_BUN;
  payload: { item: TItem; price: number };
}

export interface IDecrementAction {
  readonly type: ConstructorTypes.DECREMENT;
  payload: { item: TItem; price: number };
}

export interface ISortIngredientsAction {
  readonly type: ConstructorTypes.SORT_INGREDIENTS;
  sortedArray: TItem[];
}

export interface IClearIngredientsAction {
  readonly type: ConstructorTypes.CLEAR_INGREDIENTS;
}

export interface IClearTotalAction {
  readonly type: ConstructorTypes.CLEAR_TOTAL;
}
