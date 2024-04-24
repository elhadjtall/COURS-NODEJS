const types = require("express/lib/response");
const mongoose = require("mongoose");

// On creer un schema
const userSchema = new mongoose.Schema(
    {
        // Pas de besoin de l'ID
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
    }
)

// Importer le schema du pokemon qui determine les données de la base
const User = mongoose.model("User", userSchema);
module.exports = mongoose.model("User", userSchema);
