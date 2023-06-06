import { combineReducers } from "redux";
import { burgerConstructorReducer } from "./burger-constructor";
import { getIngredientsReducer } from "./ingredients";
import { postOrderReducer } from "./order";
import { ingredientReducer, orderReducer } from "./popup";

export const rootReducer = combineReducers({
  burgerConstructor: burgerConstructorReducer,
  ingredients: getIngredientsReducer,
  order: postOrderReducer,
  ingredientDetails: ingredientReducer,
  orderDetails: orderReducer
});

