const { Router } = require('express');
const { Recipe, Diet } = require('../db');

const router = Router();

router.post('/', async (req, res) => {
    try {
        let { nombre, resumen, nivelDeComida, pasoAPaso, dieta } = req.body

        let newRecipe = await Recipe.create({
            nombre,
            resumen,
            nivelDeComida,
            pasoAPaso,
        })
        let dietDB = await Diet.findAll({ 
            where: {nombre: dieta}
        })
        console.log(dietDB)
        // investigar como ver la relacion
        newRecipe.addDiet(dietDB);
        console.log(newRecipe)
        res.status(200).send(newRecipe);
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;