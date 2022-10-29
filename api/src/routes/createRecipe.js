const { Router } = require('express');
const { Recipe, Diet } = require('../db');

const router = Router();

router.post('/', async (req, res) => {
    try {
        let { nombre, resumen, nivelDeComida, pasoAPaso } = req.body

        let newRecipe = await Recipe.create({
            nombre,
            resumen,
            nivelDeComida,
            pasoAPaso
        })
        // let dietDB = await Diet.findAll({ 
        //     where: {nombre: diets}
        // })
        console.log(newRecipe)
        res.status(200).send(newRecipe);
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;