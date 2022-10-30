const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const getRecipes = require('./getRecipes');
const getRecipesById = require('./getRecipesById');
const getRecipeByName = require('./getRecipeByName');
const createRecipe = require('./createRecipe');
const getAllDiets = require('./getAllDiets');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/recipes', getRecipes);
router.use('/recipes', getRecipesById);
router.use('/recipe', getRecipeByName);
router.use('/recipe', createRecipe);
router.use('/diets', getAllDiets);


module.exports = router;
