const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

// Route for fetching and storing Pokémon data
router.post('/register', userController.registerUser);
//router.post('/login', userController.loginUser);
router.get("/:id/liked_pokemons", userController.getLikedPokemonsByUserId);


module.exports = router;