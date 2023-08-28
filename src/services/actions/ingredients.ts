import { TItem } from "../../utils/types/types";

export const GET_INGREDIENT_REQUEST: 'GET_INGREDIENT_REQUEST' = 'GET_INGREDIENT_REQUEST';
export const GET_INGREDIENT_SUCCESS: 'GET_INGREDIENT_SUCCESS' = 'GET_INGREDIENT_SUCCESS';
export const GET_INGREDIENT_ERROR: 'GET_INGREDIENT_ERROR' = 'GET_INGREDIENT_ERROR';

export const getIngredientRequest = () => {
    return {
        type: GET_INGREDIENT_REQUEST,
    }
}

export const getIngredientSuccess = (ingredients: TItem) => {
    return {
        type: GET_INGREDIENT_SUCCESS,
        ingredients
    }
}

export const getIngredientError = () => {
    return {
        type: GET_INGREDIENT_ERROR,
    }
}

export const actionCreators = {
    getIngredientRequest,
    getIngredientSuccess,
    getIngredientError    
}