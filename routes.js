// import des dependances
const express = require('express');
const req = require('express/lib/request');
// Le router est le composant qui va définier ce qu'on fait pour 
// Chaque chemin qu'on enmprunte
//Un GET sur http://localhost:3000/users/
// Va nous ramener sur usersController.getAllusers()
const router = express.Router();
const pokemonRoutes = require('./routes/pokemonRoutes');

// Message de bienvenue sur mon API sur localhost:3000/api
router.get('/'), (req, res) => {
    res.send('Welcome to the API');
}

router.use('/pokemons', pokemonRoutes);

module.exports = router;