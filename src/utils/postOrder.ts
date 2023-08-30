import { request } from "./api";
import { OPEN_ORDER } from "../services/actions/popup";
import { DELETE_ALL_ITEMS } from "../services/actions/burger-constructor";
import { POST_ORDER_ERROR, POST_ORDER_SUCCESS, POST_ORDER_REQUEST } from "../services/actions/order";
import { AppDispatch } from "../services/store";



export function postOrder(requestOptions: object) {
  return function (dispatch: AppDispatch) {
    const endPoint = '/orders';
    dispatch({
      type: POST_ORDER_REQUEST
    })
    
    request(endPoint, requestOptions)
      .then(data =>
        dispatch({
          type: POST_ORDER_SUCCESS,
          data: data
        }))
      .then(() => dispatch({
        type: OPEN_ORDER
      }))
      .then(() => dispatch({
        type: DELETE_ALL_ITEMS
      }))
      .catch(err => {
        dispatch({
          type: POST_ORDER_ERROR
        })
      })
  }
}