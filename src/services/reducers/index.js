import { combineReducers } from "redux";
import { burgerConstructorReducer } from "./burger-constructor";
import { getIngredientsReducer } from "./ingredients";
import { postOrderReducer } from "./order";
import { ingredientReducer, orderReducer } from "./popup";
import { userReducer } from "./user"
import { passwordReducer } from "./password";
import { currentOrderReducer } from "./order";
import { wsReducer } from "./ws-reducer-orders";
import { wsProfileReducer } from "./ws-reducer-profile-orders";

export const rootReducer = combineReducers({
  burgerConstructor: burgerConstructorReducer,
  ingredients: getIngredientsReducer,
  order: postOrderReducer,
  ingredientDetails: ingredientReducer,
  orderDetails: orderReducer,
  user: userReducer,
  password: passwordReducer,
  current: currentOrderReducer,
  orders: wsReducer,
  profileOrders: wsProfileReducer
});

