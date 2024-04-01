const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require('jsonwebtoken');

const test = (req, res) => {
  res.send("<h1>Hello</h1>");
};

//------- REGISTER ENDPOINT -------------------
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Check if name is entered
    if (!name) return res.json({ error: "Name is required" });

    // Check if password is strong
    if (!password) return res.json({ error: "Password is required" });
    if (password.length < 6)
      return res.json({ error: "Password is too small" });

    // Check if email is unique
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.json({ error: "Email is already registered" });

    const hashedPassword = await hashPassword(password);
    const user = await User.create({ name, email, password: hashedPassword });
    return res.json({ user });
  } catch (err) {
    console.log("Could not receive data", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
//----------------------------------------------------------------
//----------- LOGIN ENDPOINT -------------------------------------
const loginUser = async (req,res)=>{
    try {
        const {email, password} = req.body
        const user = await User.findOne({email});
        // Check if user exists
        if(!user) return res.json({error:'This email is not registered!'})

        //Check if password match
        checkPassword = await comparePassword(password,user.password)
        if(checkPassword){
            // return res.json({name:user.name})
            jwt.sign({email:user.email, id:user._id, name:user.name},process.env.JWT_SECRET,{},(err,token)=>{
                if(err) throw err;
                res.cookie('token',token).json(user)
            })
        }
        else return res.json({error:"Incorrect password"})

    } catch (error) {
        console.log('Error while logging in',error)
    }
}
//----------------------------------------------------------------
const getProfile = (req,res)=>{
    const {token} = req.cookies
    if(token){
        jwt.verify(token,process.env.JWT_SECRET,{},(err,user)=>{
            if(err) throw err;
            res.json(user)
        })
    }else{
        res.json(null)
    }
}
module.exports = { test, registerUser,loginUser,getProfile};
