const { Recipe, Diet } = require("../db");

const getRecipesDb = async () => {
    return await Recipe.findAll({
        include: {
            model: Diet,
            attributes: ['nombre'],
            through: {
                attributes: [],
            }
        }
    })
}

module.exports = { getRecipesDb };

