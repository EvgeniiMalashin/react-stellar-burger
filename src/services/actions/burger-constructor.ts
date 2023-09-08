import { TItem } from "../../utils/types/types";


export const ADD_ITEM: 'ADD_ITEM' = 'ADD_ITEM';
export const DELETE_ITEM: 'DELETE_ITEM' = 'DELETE_ITEM';
export const DELETE_ALL_ITEMS: 'DELETE_ALL_ITEMS' = 'DELETE_ALL_ITEMS';
export const MOVE_ITEMS: 'MOVE_ITEMS' = 'MOVE_ITEMS';

export const addItem = (payload: TItem) => {
    return {
        type: ADD_ITEM,
        payload
    }
}

export const deleteItem = (payload: number) => {
    return {
        type: DELETE_ITEM,
        payload
    }
}

export const deleteAllItems = () => {
    return {
        type: DELETE_ALL_ITEMS,
    }
}

export const moveItems = (payload: TItem[]) => {
    return {
        type: MOVE_ITEMS,
        payload
    }
}

export const actionCreators = {
    addItem,
    deleteItem,
    deleteAllItems,
    moveItems
}