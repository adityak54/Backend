//          MVC FILE STRUCTURE

const express = require('express')
const server = express()
const productController = require('./controller/products.js')

server.use(express.json())
server.get('/products',productController.getAllProducts)
server.get('/products/:id',productController.getProduct)
server.post('/products/:id',productController.createProduct)
server.put('/products/:id',productController.replaceProduct)
server.patch('/products/:id',productController.updateProduct)
server.delete('/products/:id',productController.deleteProduct)
server.listen(8080)