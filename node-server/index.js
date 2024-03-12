const express = require('express')
const cors = require('cors')
const server = express()
const bodyParser = require('body-parser')
require('dotenv').config()
// -------- Database connection-----------
const mongoose = require('mongoose')
const uri = `mongodb+srv://UnStAbLe:${process.env.DB_PASSWORD}@cluster0.e1qhiv9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB Atlas:', err.message);
  });
//----------------------------------------
//--------------- Schema-----------
const {Schema} = mongoose
const userSchema = new Schema({
    username:String,
    password:String
})
const user = mongoose.model('user,',userSchema)

//---------------------------------
//------------- Middleware ---------------
server.use(cors())
server.use(bodyParser.json())
//-----------------------------------------
server.post('/test',(req,res)=>{
    const newUser = new user(req.body);
    newUser.save()
               .then((result)=>{
                    console.log(result)
               })
               .catch((err)=>{
                console.log(err)
               })
    console.log(req.body)
    res.json(req.body)
})

server.get('/test', async (req, res) => {
    try {
        const users = await user.find();
        res.json(users);
        console.log(users); 
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});
server.listen(8080,()=>{
    console.log('Server-started')
})