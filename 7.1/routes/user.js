const express = require('express')
const router = express.Router()
const userController = require('../controller/users.js') 
router 
    .use(express.json())
    .get('/',userController.getAllUsers)
    .get('/:id',userController.getUser)
    .put('/:id',userController.replaceUser)
    .patch('/:id',userController.updateUser)
    .delete('/:id',userController.deleteUser)
    .post('/:id',userController.createUser)

exports.router = router