// on import  express et nodemon c'est à dire dépendances
const express = require('express');
const mongoose = require('mongoose'); 
const routes = require('./routes');
require('dotenv').config();
const cors = require('cors');

// Initialisation de l'application express, on définis le numéro de 
let app = express();
let port = 3000;
app.use(cors());

// Message de bienvenue sur localhost:3000
app.use(express.json());
app.get('/', (req, res) => {
    res.send('welcome to my backend');
})
app.use("/api", routes);
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
app.listen(port, () => {
    console.log("Server en ligne sur le port 3000");
});