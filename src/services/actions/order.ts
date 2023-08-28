import { TOrder } from "../../utils/types/types";

export const POST_ORDER_REQUEST: 'POST_ORDER_REQUEST' = 'POST_ORDER_REQUEST';
export const POST_ORDER_ERROR: 'POST_ORDER_ERROR' = 'POST_ORDER_ERROR';
export const POST_ORDER_SUCCESS: 'POST_ORDER_SUCCESS' = 'POST_ORDER_SUCCESS';

export const ADD_CURRENT_ORDER: "ADD_CURRENT_ORDER" = "ADD_CURRENT_ORDER";
export const REMOVE_CURRENT_ORDER: "REMOVE_CURRENT_ORDER" = "REMOVE_CURRENT_ORDER";

export const addCurrentOrder = (item: TOrder) => {
  return {
    type: ADD_CURRENT_ORDER, item: item
  };
};

export const removeCurrentOrder = () => {
  return {
    type: REMOVE_CURRENT_ORDER,
  };
};

export const postOrderRequest = () => {
  return {
    type: POST_ORDER_REQUEST,
  }
}

export const postOrderError = () => {
  return {
    type: POST_ORDER_ERROR,
  }
}

export const postOrderSuccess = (data: {order:TOrder}) => {
  return {
    type: POST_ORDER_SUCCESS,
    data
  }
}


export const actionCreators = {
  addCurrentOrder,
  removeCurrentOrder,
  postOrderRequest,
  postOrderError,
  postOrderSuccess
}



