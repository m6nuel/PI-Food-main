const { Router } = require('express');
const { Recipe, Diet } = require('../db');

const router = Router();

router.post('/', async (req, res) => {
    try {
        let { id, nombre, resumen, nivelDeComida, pasoAPaso, dieta } = req.body

            let newRecipe = await Recipe.create({
            id,
            nombre,
            resumen,
            nivelDeComida,
            pasoAPaso
        })
        let dietDB = await Diet.findAll({ 
            where: {nombre: dieta}
        })

        newRecipe.addDiet(dietDB);
        console.log(newRecipe)
        res.status(200).send(newRecipe);
    } catch (error) {
        console.log(error)
        res.status(400).json('El formulario debe estar completo')
    }
})

module.exports = router;