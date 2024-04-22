// on import  express et nodemon
const express = require('express');
const mongoose = require('mongoose'); 
require('dotenv').config();

// Ici on va se connecter à la base de donnée grêce Mongoose
mongoose
    .connect(process.env.MONGO_URI, {})
    .then(() => {
        console.log("connecter à la BDD");
})
    .catch((err) => {
        console.log('Erreur de connexion', err)
})
// On va initialiser et demarerrer notre serveur
let app = express();
let port = 3000;
app.listen(port, () => {
    console.log("Server en ligne sur le port 3000");
});