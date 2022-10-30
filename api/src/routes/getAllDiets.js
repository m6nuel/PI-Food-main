const { Router } = require('express');
const { getRecipes } = require('../controllers/getRecipes');
const { Diet } = require('../db');

const router = Router();

router.get('/', async (req, res) => {
    try {
        let data = await getRecipes();
        const diets = data.map(recipe => recipe.tipoDieta);
        const allDiets = diets.toString().split(",");
        const dietsUnicas = {};
        const sinRepetir = allDiets.filter( diet =>{
            return dietsUnicas.hasOwnProperty(diet) ? false : dietsUnicas[diet] = true
        })
        const sinNulls = sinRepetir.filter(Boolean);

        sinNulls.forEach(diet => {
            let i = diet.trim();
            Diet.findOrCreate({
                where: { nombre: i }
            })
        });

        const allD = await Diet.findAll();

        return res.json(allD)
    } catch (error) {
        console.log(error)
    }
     
})

module.exports = router;