const fs = require('fs')
const data = JSON.parse(fs.readFileSync('./users.json','utf-8'))
const users = data.users

exports.getAllUsers = (req,res)=>{
    res.json(users)
}

exports.getUser = (req,res)=>{
    const id = +req.params.id  
    const user = users.find(p=>p.id===id) 
    res.json(user) 
}
exports.createUser = (req,res) => {
    const user = req.body
    users.push(user)
    res.json({type:'POST'})
}
exports.replaceUser = (req,res) => {
    const id = +req.params.id;
    const userIndex = users.findIndex(p=>p.id===id)
    users.splice(userIndex,1,{...req.body, id:id})
    res.status(201).json()
}
exports.updateUser = (req,res) => {
    const id = +req.params.id;
    const userIndex = users.findIndex(p=>p.id===id)
    const user = users[userIndex]
    users.splice(userIndex,1,{...user,...req.body})
    res.status(201).json()
}
exports.deleteUser = (req,res) => {
    const id = +req.params.id;
    const userIndex = users.findIndex(p=>p.id===id)
    users.splice(userIndex,1)
    res.status(201).json()
}
