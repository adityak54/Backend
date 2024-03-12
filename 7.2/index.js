// Creating same APIs for users as well (users.json)
require('dotenv').config()
const express = require('express')
const server = express()
const morgan = require('morgan')


//------------------- DATABASE ------------------------
const mongoose = require('mongoose')
const uri = `mongodb+srv://UnStAbLe:${process.env.DB_PASSWORD}@cluster0.gqoon56.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB Atlas:', err.message);
  });

const productRouter = require('./routes/product')
const userRouter = require('./routes/user')

server.use(express.json());
server.use(morgan('default'))
server.use('/products',productRouter.router) 
server.use('/users',userRouter.router)
server.listen(8080)