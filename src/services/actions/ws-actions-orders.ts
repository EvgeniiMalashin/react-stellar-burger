import { TWsOrders } from "../../utils/types/types";

export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_OPEN: 'WS_CONNECTION_OPEN' = 'WS_CONNECTION_OPEN';
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSE' = 'WS_CONNECTION_CLOSE';
export const WS_GET_ORDERS: 'WS_GET_ORDERS' = 'WS_GET_ORDERS';
export const WS_SEND_DATA: 'WS_SEND_DATA' = 'WS_SEND_DATA';



export const wsActions = {
    wsInit: WS_CONNECTION_SUCCESS,
    onOpen: WS_CONNECTION_OPEN,
    onError: WS_CONNECTION_ERROR,
    onClose: WS_CONNECTION_CLOSED,
    onMessage: WS_GET_ORDERS,
    wsSendData: WS_SEND_DATA,
};

export const wsConnectionInit = () => {
    return {
        type: WS_CONNECTION_SUCCESS,
    };
};

export const wsConnectionOpen = () => {
    return {
        type: WS_CONNECTION_OPEN,
    };
};

export const wsConnectionClose = () => {
    return {
        type: WS_CONNECTION_CLOSED,
    };
};

export const wsConnectionError = (error: string) => {
    return {
        type: WS_CONNECTION_ERROR,
        payload: error,
    };
};

export const wsGetOrders = (data: TWsOrders) => {
    return {
        type: WS_GET_ORDERS,
        payload: data,
    };
};

export const wsSendData = (data: object) => {
    return {
        type: WS_SEND_DATA,
        payload: data,
    };
};

export const actionCreators = {
    wsConnectionInit,
    wsConnectionOpen,
    wsConnectionClose,
    wsConnectionError,
    wsGetOrders,
    wsSendData
}