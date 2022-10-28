const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env;

const getRecipes = async () => {
    let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`;
    let recipes = [];
    try {
        let {data} = await axios.get(url);
        if(data.results.length > 0) {
            data.results.map(recipe => {
                recipes.push({
                    id: recipe.id,
                    nombre: recipe.title,
                    resumen: recipe.summary,
                    nivelDeComida: recipe.healthScore,
                    pasoAPaso: (recipe.analyzedInstructions[0] &&
                        recipe.analyzedInstructions[0].steps 
                        ?
                        recipe.analyzedInstructions[0].steps.map(i=>i.step)
                        :
                        'No tiene pasos'),
                        imagen: recipe.image,
                        tipoDieta: recipe.diets,
                        tipoPlato: recipe.dishTypes
                    })
                })
            }        
            return recipes;
    } catch (error) {
        console.log(error)
        return 'No funciona la Api'
    }    
}

module.exports = { getRecipes };