const { Router } = require('express');
const { getRecipes } = require('../controllers/getRecipes');

const router = Router();

router.get('/', async (req, res) => {
    let { name } = req.query; 
    let allRecipes = await getRecipes();
    
    if (name) {
        try {
            const recipeByName = allRecipes.filter(recipe => recipe.nombre.toLowerCase().includes(name.toLowerCase()));
            console.log(recipeByName.length)
            res.json(recipeByName.length > 0 ? recipeByName : 'Receta no encontrada')
        } catch (error) {
            res.send(e)    
        }
    }
})

module.exports = router;