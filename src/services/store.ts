import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { rootReducer } from "./reducers";
import { socketMiddleware } from "./middleware/socketMiddleware";
import { wsActions } from "./actions/ws-actions-orders";
import { wsProfileActions } from "./actions/ws-actions-profile-orders";
import { baseUrl } from "../utils/constatnts";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";


const wsUrl = baseUrl + "/orders/all";
const wsProfileUrl = baseUrl + "/orders";

const initialState = {};

const initStore = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      socketMiddleware(wsUrl, wsActions, false),
      socketMiddleware(wsProfileUrl, wsProfileActions, true)
    )
  )
);

export type AppDispatch = typeof initStore.dispatch;
export type RootState = ReturnType<typeof initStore.getState>;
export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, any>
>;


export default initStore;