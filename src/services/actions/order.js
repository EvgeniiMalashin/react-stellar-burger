export const POST_ORDER_REQUEST = 'POST_ORDER_REQUEST';
export const POST_ORDER_ERROR = 'POST_ORDER_ERROR';
export const POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS';

export const ADD_CURRENT_ORDER = "ADD_CURRENT_ORDER";
export const REMOVE_CURRENT_ORDER = "REMOVE_CURRENT_ORDER";

export const addCurrentOrder = (item) => {
    return  {
      type: ADD_CURRENT_ORDER, item: item 
    };
  };
  


  export const removeCurrentOrder = () => {
    return {
      type: REMOVE_CURRENT_ORDER,
    };
  };