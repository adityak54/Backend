//------------------- Router method in express ---------------------

const express = require('express')
const server = express()
//alag se product ke liye router me file bana diye hain
const productRouter = require('./routes/product')

// normal server pe karna is not a good practice
// we can create routes using Router method in express

server.use('/products',productRouter.router) // implementation ke liye middleware use karenge

server.listen(8080)