// Import des dependances 
// On importe le bcrypt pour crypter les passwords
const bcrypt = require('bcrypt');
const User = require('../models/userModel');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
exports.getOneUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json("User not found");
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Creat a register
exports.createUser = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10); //10 la difficulter du hashage
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });
        const saveUser = await newUser.save();
        res.status(201).json(saveUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Edit a user
exports.editUser = async (req, res) => {
    try {
        // On verifie si le password existe
        const updateData = req.body;
        if (updateData.password) {
            updateData.password = await bcrypt.hash(updateData.password, 10);
        }
        const updateUser = await User.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(updateUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
// Put a user
exports.updateUser = async (req, res) => {
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(updateUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Delete a user
exports.deleteUser = async (req, res) => {
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id);
        res.status(200).json(deleteUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }  
}

