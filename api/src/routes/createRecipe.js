const { Router } = require('express');
const { Recipe } = require('../db');

const router = Router();

router.post('/', async (req, res) => {
    // try {
        let { nombre } = req.body

        let newRecipe = await Recipe.create({
            nombre
        })
        console.log(newRecipe)
        res.status(200).send(newRecipe);
    // } catch (error) {
        // console.log(error)
    // }
})

module.exports = router;