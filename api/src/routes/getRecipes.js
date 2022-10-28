const { Router } = require('express');
const { getRecipes } = require('../controllers/getRecipes');

const router = Router();

router.get('/', async (req, res) => {
    try {
        let data = await getRecipes();
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;