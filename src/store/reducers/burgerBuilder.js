import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../utility";

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false
}

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

const burgerBuilder = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.ADD_INGREDIENT):
            const updatedIngridient = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1};
            const updatedIngridients = updateObject(state.ingredients, updatedIngridient);
            const updatedState = {
                ingredients: updatedIngridients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };
            return updateObject(state, updatedState);
        case (actionTypes.REMOVE_INGREDIENT):
            const updatedIng = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1};
            const updatedIngr = updateObject(state.ingredients, updatedIng);
            const updatedSt = {
                ingredients: updatedIng,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };
            return updateObject(state, updatedSt);
        case (actionTypes.SET_INGREDIENTS):
            return updateObject(state, {
                ingredients: {
                    salad: action.ingredients.salad,
                    bacon: action.ingredients.bacon,
                    cheese: action.ingredients.cheese,
                    meat: action.ingredients.meat
                },
                totalPrice: 4,
                error: false
            });
        case (actionTypes.FETCH_INGREDIENTS_FAILED):
            return updateObject(state, {error: true});
        default:
            return state;
    }
}

export default burgerBuilder;