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
        isAdmin: {
            type: Boolean,
            default: false,
        },
    }
)


module.exports = mongoose.model("User", userSchema);
