const express = require('express');
const router = express.Router();

// Récupérer tous les pokemons
// GET : localhost:3000/api/pokemons
router.get('/', (req, res) => {
    res.send('Liste de tous les Pokémons');
});

// Récupérer un pokemon par son ID
// GET : localhost:3000/api/pokemons/8776HJH
router.get('/:id', (req, res) => {
    res.send('Récupérer un Pokémon par son ID');
});

// Modifier un pokemon
// PUT : localhost:3000/api/pokemons/:id
router.put('/:id', (req, res) => {
    res.send('Modifier un Pokémon');
});

// Supprimer un pokemon
// DELETE : localhost:3000/api/pokemons/:id
router.delete('/:id', (req, res) => {
    res.send('Supprimer un Pokémon');
});

// Exporter le router pour pouvoir l'utiliser ailleurs, notamment dans index.js
module.exports = router;