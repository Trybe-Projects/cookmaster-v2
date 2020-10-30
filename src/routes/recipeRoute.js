const express = require('express');
const recipeController = require('../controllers/recipeController');
const tokenAuthorization = require('../middlewares/tokenAuthorization');
const recipeValidation = require('../middlewares/recipeValidation');

const router = express.Router();

router.post('/', tokenAuthorization, recipeValidation, recipeController.insertRecipe);

module.exports = router;