//------------------------- dotenv module ----------------------------

// basically cloud pe daalenge apna website to password hidden rehna chahiye
// iske liye dotenv use karenge

// More generally, dotenv alag alag environment ke hisaab se chalane ke kaam aata hai
require('dotenv').config()  // isse top level pe laga diye taaki har jagah use kar paaye

const express = require('express')
const server = express()  
server.get('/',(req,res)=>{
    res.send('<h1>HELLO</h1>')
})
// .gitignore me .env waali file bhi daal denge jisse hamara password safe rahega 
console.log('env',process.env.PASSWORD) 
server.listen(8080)