// On import le pokemon model
 const Pokemon = require('../models/pokemonModel');

 exports.getAllPokemons = async (req, res) => {
    try {
        //On va creer une variable
        const pokemons = await Pokemon.find();
        res.status(200)
    } catch (error){
        res.status(500).json({messages: error.message})
    } 
 }

 // On recupere un pokemon
 exports.getOnePokemons = async (req, res) => {
    try {
        //On va creer une variable
        const pokemon = await Pokemon.findBtId(req.params.id);
        // On va faire une condition 
        if (!pokemon) return res.status(404).json("Pokemon not found.")
        res.status(200).json(pokemon);
    } catch (error){
        res.status(500).json({messages: error.message})
    } 
 }
 