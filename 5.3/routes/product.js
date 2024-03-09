const express = require('express')
const router = express.Router()
const productController = require('../controller/products.js')
router
    .use(express.json())
    .get('/',productController.getAllProducts)
    .get('/:id',productController.getProduct)
    .post('/:id',productController.createProduct)
    .put('/:id',productController.replaceProduct)
    .patch('/:id',productController.updateProduct)
    .delete('/:id',productController.deleteProduct)

exports.router = router