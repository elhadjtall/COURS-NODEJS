// import des dépendances
const express = require('express');
const pokemonRoutes = require('./routes/pokemonROutes');
const userRoutes = require('./routes/userRoutes');
// Le router est le composant qui va définir ce qu'on fait pour 
// chaque chemin qu'on emprunte
const router = express.Router();

// Message de bienvenue sur mon API sur localhost:3000/api

router.get('/', (req, res) => {
    res.send('Welcome to the API');
});

router.use('/pokemons', pokemonRoutes);
router.use('/users', userRoutes);

module.exports = router;
