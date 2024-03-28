const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const server = express();

const {router} = require('./routes/authRoutes')
server.get('/',router)
const port = 8000;
server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})