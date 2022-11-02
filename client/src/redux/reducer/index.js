import { GET_DIETS, GET_RECIPES } from "../types";

const initialState = {
    recipes: [],
    diets: []
}

export default function rootReducers ( state = initialState, { type, payload } ) {
    
    switch (type) {
        case GET_RECIPES:
            return {
                ...state,
                recipes: payload
            }
        case GET_DIETS:
            return {
                ...state,
                diets: payload
            }
            
        
    
        default:
            return state;
    }
}