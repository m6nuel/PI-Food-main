import { apiFood } from "../../api"
import { GET_DIETS, GET_RECIPES, GET_RECIPE_ID } from "../types";

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
        console.log(diets)
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
            console.log(data[0]);
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
        console.log(newRecipe)
        return newRecipe;
    }
}