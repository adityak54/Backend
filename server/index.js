const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const server = express();
const cookieParser = require('cookie-parser')

//------------------Database connection-----------------------
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URL,)
.then(()=>{console.log('Database connected')})
.catch((err)=>{console.log('Database not connected',err)})
//----------------------------------------------------------------
//------------------Middleware--------------------------------

server.use(express.json()) // this will help in getting the post req from frontend
// It allows you to access the JSON data sent by clients in the req.body property of your request handlers.

server.use(cookieParser());
server.use(express.urlencoded({extended: false}))
//------------------------------------------------------------

server.use('/',require('./routes/authRoutes'))


const port = 8000;
server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})