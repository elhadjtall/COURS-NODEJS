const Pokemon = require("../models/pokemonModel");

// Get all pokemons
// Recuperer tous les pokemons
exports.getAllPokemons = async (req, res) => {
  try {
    const pokemons = await Pokemon.find();
    res.status(200).json(pokemons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get One pokemon = recuperer un pokemon
exports.getOnePokemon = async (req, res) => {
  try {
    const pokemon = await Pokemon.findById(req.params.id);
    if (!pokemon) return res.status(404).json("Pokemon not found.");
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Create Pokemons
// Creer une pokemon
exports.createPokemon = async (req, res) => {
    try {
        const newPokemon = new Pokemon ({
            name : req.body.name,
            hp: req.body.hp,
            cp: req.body.cp,
            picture: req.body.picture,
            types: req.body.types,
        });
        // Ce code permet de creer un new pokemon
        const savePokemon = await newPokemon.save();
        res.status(201).json(savePokemon);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
};

// edit a pokemon
// Editer un pokemon ou update des pokemons
exports.editPokemon = async (req, res) => {
    try {
      const updatedPokemon = await Pokemon.findByIdAndUpdate(
        req.params.id, 
        req.body, );
      if (!updatedPokemon) return res.status(404).json("Pokemon not found.");
      res.status(200).json(updatedPokemon);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };  
 
exports.deletePokemon = async (req, res) => {
    try {
      const pokemon = await Pokemon.findByIdAndDelete(req.params.id);
      if (!pokemon) return res.status(404).json("Pokemon not found.");
  
      res.status(200).json("Pokemon deleted successfully.");
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  