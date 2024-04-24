const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');
const userController = require('../controllers/userController');

// Get all pokemons
// GET sur localhost:3000/api/pokemons
router.get('/', pokemonController.getAllPokemons);

// Get ONE pokemon
// localhost:3000/api/pokemons/9230774h2203HDkdj
router.get('/:id', pokemonController.getOnePokemon);

// Get ONE user
// localhost:3000/api/pokemons/user/12345 (example)
router.get('/', userController.getAllUsers);

// Create a Pokemon
// POST sur localhost:3000/api/pokemons
router.post('/', pokemonController.createPokemon);

// Edit a Pokemon
router.put('/:id', (req, res) => {
    res.send('Edit a Pokemon');
});

// Delete a Pokemon
router.delete('/:id', pokemonController.deletePokemon);

module.exports = router;
