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
        // console.log(dietDB)
        console.log(newRecipe.dataValues.nombre)
        newRecipe.addDiet(dietDB);
        console.log(newRecipe)
        res.status(200).send(newRecipe);
    } catch (error) {
        console.log(error)
        res.status(400).json('El formulario debe estar completo')
    }
})

module.exports = router;