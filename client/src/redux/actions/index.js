import { apiFood } from "../../api"
import { GET_RECIPES } from "../types";

export const getAllRecipes = () => {
    return async (dispatch) => {
        let recipes = await apiFood.get('/recipes');
        return dispatch({
            type: GET_RECIPES,
            payload: recipes.data
        })
    }
}