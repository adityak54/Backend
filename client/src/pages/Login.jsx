import React, { useState } from "react";
import axios from 'axios'
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email:'',
    password:'' 
  })
  const loginUser = async (e)=>{
    e.preventDefault()
    const {email,password} = data;
    try {
      const response = await axios.post('/login',{email,password})
      const message = response.data
      if(message.error){
        toast.error(message.error)
      }else{
        setData({email:'', password:''})
        toast.success(`Welcome ${message.name}`)
        navigate('/dashboard')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <form onSubmit={loginUser} style={{ display: "flex",  flexDirection:'column', gap:'1rem'}}>
        <div>
          <label>Email </label>
          <input type="email" placeholder="Enter your email" onChange={(e)=>{setData({...data,email:e.target.value})}}></input>
        </div>
        <div>
          <label>Password </label>
          <input type="password" placeholder="Enter your password" onChange={(e)=>{setData({...data,password:e.target.value})}}></input>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
