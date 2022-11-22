const { Recipe, Diet } = require("../db");

const getRecipesDb = async () => {

    try {
        const recipesDb = await Recipe.findAll({
            include: {
            model: Diet,
            attributes: ['nombre'],
            through: {
                attributes: [],
            }
        } 
        })
        let resp = await recipesDb?.map( recipe => {
            return {
                id: recipe.id,
                nombre: recipe.nombre,
                nivelDeComida: recipe.healthScore,
                resumen: recipe.resumen,
                pasoAPaso: recipe.pasoAPaso,

            }
        })
        return resp
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getRecipesDb };

