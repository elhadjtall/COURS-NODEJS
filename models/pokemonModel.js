const { type } = require("express/lib/response");
const mongoose = require("mongoose");

// On creer un schema
const pokemonSchema = new mongoose.Schema(
  {
    // Pas de besoin de l'ID
    name: {
      type: String,
      required: true,
    },
    hp: Number,
    cp: Number,
    picture: String,
    Types: {
      type: String,
      enum: ["Feu", "Eau", "Plante", "Acier", "Combat"],
    },
  },
  { timestamps: true }
);

// Importer le schema du pokemon qui determine les données de la base
const pokemon = mongoose.model("Pokemon", pokemonSchema);
module.exports = pokemon;
