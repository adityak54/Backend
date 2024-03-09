// Creating same APIs for users as well (users.json)

const express = require('express')
const server = express()

const productRouter = require('./routes/product')
const userRouter = require('./routes/user')

server.use('/products',productRouter.router) 
server.use('/users',userRouter.router)
server.listen(8080)