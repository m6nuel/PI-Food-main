const { Router } = require('express');
const { getRecipes } = require('../controllers/getRecipes');
const { getRecipesDb } = require('../controllers/getRecipesDb');

const router = Router();

router.get('/', async (req, res) => {
    try {
        let data = await getRecipes();
        let dataDb = await getRecipesDb();
        let allRecipes = [...data, ...dataDb]
        res.json(allRecipes)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;