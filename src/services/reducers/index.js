import { combineReducers } from "redux";
import { burgerConstructorReducer } from "./burger-constructor";
import { getIngredientsReducer } from "./ingredients";
import { postOrderReducer } from "./order";
import { ingredientReducer, orderReducer } from "./popup";
import { userReducer } from "./user"
import { passwordReducer } from "./password";

export const rootReducer = combineReducers({
  burgerConstructor: burgerConstructorReducer,
  ingredients: getIngredientsReducer,
  order: postOrderReducer,
  ingredientDetails: ingredientReducer,
  orderDetails: orderReducer,
  user: userReducer,
  password: passwordReducer
});

