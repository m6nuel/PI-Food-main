import { apiFood } from "../../api"
import { CLEAN_DETAIL, DIETS_FILTER, GET_DIETS, GET_RECIPES, GET_RECIPE_BY_NAME, GET_RECIPE_ID, HEALTH_SCORE, ORDE_ALPHA } from "../types";

export const getAllRecipes = () => {
    return async (dispatch) => {
        let recipes = await apiFood.get('/recipes');
        return dispatch({
            type: GET_RECIPES,
            payload: recipes.data
        })
    }
}

export const getAllDiets = () => {
    return async (dispatch) => {
        let diets = await apiFood.get('/diets');
        return dispatch({
            type: GET_DIETS,
            payload: diets.data
        })
    }

}

export const getRecipebyId = (id) => {
    return async (dispatch) => {
        try {
            let {data} = await apiFood.get(`/recipes/${id}`);
            return dispatch({
                type: GET_RECIPE_ID,
                payload: data[0]
            })            
        } catch (error) {
            console.log(error)
        }
    }
}

export const createRecipe = (payload) => {
    return async () => {
        const newRecipe = await apiFood.post('/recipe', payload);
        return newRecipe;
    }
}

export const getRecipeByName = (name) => {
    return async (dispatch) => {
        try {
            var recipesByName = await apiFood.get(`/recipe?name=${name}`);
            console.log(recipesByName);
            dispatch({
                type: GET_RECIPE_BY_NAME,
                payload: recipesByName.data
            })
        } catch (error) {
            console.log(error);
            let recipes = await apiFood.get('/recipes');
            dispatch({
                type: GET_RECIPES,
                // renderizar algo valido si no se encuentra la busqueda
                payload: recipes.data
            })
        }
    }
}

export const dietsFilter = ( payload ) => {
    return {
        type: DIETS_FILTER,
        payload
    }
}

export const ordeAlpha = (payload) => {
    return {
        type: ORDE_ALPHA,
        payload
    }
}

export const  healthScore = (payload) => {
    return {
        type: HEALTH_SCORE,
        payload
    }
}

export const cleanDetail = () => {
    return {
        type: CLEAN_DETAIL
    }
}
