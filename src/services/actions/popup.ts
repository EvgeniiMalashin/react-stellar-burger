

export const OPEN_DETAILS: 'OPEN_DETAILS' = 'OPEN_DETAILS';
export const CLOSE_DETAILS: 'CLOSE_DETAILS' = 'CLOSE_DETAILS';
export const OPEN_ORDER: 'OPEN_ORDER' = 'OPEN_ORDER';
export const CLOSE_ORDER: 'CLOSE_ORDER' = 'CLOSE_ORDER';

export const openDetails = (currentItem: object) => {
    return {
        type: OPEN_DETAILS,
        payload: currentItem
    }
}

export const closeDetails = () => {
    return {
        type: CLOSE_DETAILS,
    }
}

export const openOrder = () => {
    return {
        type: OPEN_ORDER,
    }
}

export const closeOrder = () => {
    return {
        type: CLOSE_ORDER,
    }
}

export const actionCreators = {
    openDetails,
    closeDetails,
    openOrder,
    closeOrder
}