import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { rootReducer } from "./reducers";
import { socketMiddleware } from "./middleware/socketMiddleware";
import { wsActions } from "./actions/ws-actions-orders";
import { wsProfileActions } from "./actions/ws-actions-profile-orders";


const wsUrl = "wss://norma.nomoreparties.space/orders/all";
const wsProfileUrl = "wss://norma.nomoreparties.space/orders";

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

export default initStore;