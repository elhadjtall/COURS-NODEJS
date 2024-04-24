// Impoorter les dependances

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');



router.get('/', userController.getAllUsers);
router.get('/:id', userController.getOneUser);
router.put('/:id', userController.editUser);
router.post('/', userController.createUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;