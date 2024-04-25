// Importer les dependances

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/verify', userController.verifyToken);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getOneUser);
router.put('/:id', userController.editUser);
router.post('/', userController.createUser);
router.delete('/:id', userController.deleteUser);
router.post('/login', userController.login);

module.exports = router;