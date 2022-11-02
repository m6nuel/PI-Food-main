import { apiFood } from "../../api"
import { GET_DIETS, GET_RECIPES } from "../types";

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