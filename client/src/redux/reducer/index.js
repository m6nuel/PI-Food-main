import { CLEAN_DETAIL, DIETS_FILTER, GET_DIETS, GET_RECIPES, GET_RECIPE_BY_NAME, GET_RECIPE_ID, HEALTH_SCORE, ORDE_ALPHA } from "../types";

const initialState = {
    recipes: [],
    recipesAux: [],
    diets: [],
    detail: []
}

export default function rootReducers ( state = initialState, { type, payload } ) {
    
  switch (type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: payload,
        recipesAux: payload
      }
    case GET_DIETS:
      return {
          ...state,
          diets: payload
      }
    case GET_RECIPE_ID:
      return {
          ...state,
          detail: payload
      }
    case GET_RECIPE_BY_NAME:
      return {
          ...state,
          recipes: payload
      }
    case DIETS_FILTER:
      const dietFilter = state.recipesAux
      let filterDiets = [];
        if (payload === 'diet') {
          filterDiets = dietFilter
        } else {
          for (let i = 0; i < dietFilter.length; i++) {
            let filter = dietFilter[i].tipoDieta.find( d => d === payload )
            if (filter) {
              filterDiets.push(dietFilter[i])
            }
          }
        }
      return {
        ...state,
        recipes: filterDiets
      }
    case ORDE_ALPHA:
      const alphaOrde = ( payload === 'az' )
                          ?
                        state.recipesAux.sort((a,b) => {
                          if (a.nombre > b.nombre) {
                            return 1;
                          }
                          if (b.nombre > a.nombre) {
                            return -1
                          }
                          return 0
                        })
                          :
                        state.recipesAux.sort((a,b) => {
                          if (a.nombre > b.nombre) {
                            return -1;
                          }
                          if (b.nombre > a.nombre) {
                            return 1
                          }
                          return 0
                        })
      return {
        ...state,
        recipes: alphaOrde
      }
    case HEALTH_SCORE:
      const healthScore = ( payload === 'hs' )
                            ?
                          state.recipesAux.sort( (a, b) => {
                            if ((a.nivelDeComida - b.nivelDeComida) < 0 ) {
                              return 1
                            } else {
                              return -1
                            }
                          })
                            :
                          state.recipesAux.sort((a,b) =>{
                            if ((b.nivelDeComida - a.nivelDeComida) < 0 ) {
                              return 1
                            } else {
                              return -1
                            }
                          })
      return {
        ...state,
        recipes: healthScore
      }
    case CLEAN_DETAIL:
      return {
        ...state,
        detail: []
      }
    
    default:
        return state;
  }
}