import { ADD_ITEM, DELETE_ALL_ITEMS, DELETE_ITEM, MOVE_ITEMS } from "../actions/burger-constructor";
import { TItem } from "../../utils/types/types";

import { actionCreators } from "../actions/burger-constructor";
import { TActionFromCreators } from "../../utils/types/types";

export const burgerConstructorReducer = (state: TItem[] = [], action: TActionFromCreators<typeof actionCreators>) => {
  switch (action.type) {
    case ADD_ITEM:
      let bun = state.find((x: TItem, idx) => x.type === 'bun');
      if (action.payload.type === 'bun' && bun) {
        if (action.payload._id !== bun._id) {
          return [...state.filter((x: TItem) => x.type !== 'bun'), action.payload]
        }
        return state;
      }
      return [...state, action.payload];
    case DELETE_ITEM:
      return state.filter((_, idx) => idx !== action.payload);
    case DELETE_ALL_ITEMS:
      return [];
    case MOVE_ITEMS:
      return state;
    default: {
      return state;
    }
  }
};
