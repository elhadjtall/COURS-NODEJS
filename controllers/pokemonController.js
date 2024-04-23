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
        const newPokemon = new Pokemon; ({
            name : req.body.name,
            hp: req.body.hp,
            cp: req.body.cp,
            picture: req.body.picture,
            types: req.body.types,
        });
        // Ce code permet de creer un new pokemon
        const savePokemon = await newPokemon.save();
        res.status(201).json("Pokemon created successfully.");
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};

// edit a pokemon
// Editer un pokemon
exports.editPokemon = async (req, res) => {};
 
exports.deletePokemon = async (req, res) => {};