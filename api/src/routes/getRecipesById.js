const { Router } = require('express');
const { getDetail } = require('../controllers/getDetail');
const Diet = require('../models/Diet');
const Recipe = require('../models/Recipe');

const router = Router();

router.get('/:id', async (req, res) => {
    let { id } = req.params; 
    if (id.length > 7) {
        let data = await Recipe.findByPk(id,{
            include: {
                model: Diet,
                atributes: ['nombre'],
                through: {
                    atributes: [],
                }
            }
        })
        if (data) {
            const recipeDb = {
                id: data.id,
                nombre: data.nombre,
                nivelDeComida: data.nivelDeComida,
                pasoAPaso: data.pasoAPaso,
                resumen: data.resumen
            }
            res.json(recipeDb)
        }else {
            const recipeDb = ['receta no encontrada']
            res.json(recipeDb)
        }
    }
    let data = await getDetail(id);
    res.json(data)
})

module.exports = router;