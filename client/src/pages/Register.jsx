import React, { useState } from "react";
import axios from 'axios'
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    name:'',
    email:'',
    password:''
  })
  const handleRegister = async (e)=>{
    e.preventDefault()
    const {name,email,password} = data
    try {
      const response = await axios.post('/register',{name,email,password})
      const message = response.data
      // console.log(message)
      if(message.error){
        toast.error(message.error)
      }else{
        setData({name: '', email: '', password: ''})
        toast.success('Registered successfully!')
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <form  onSubmit={handleRegister} style={{display:'flex', flexDirection:'column', gap:'2rem'}}>
        <div>
          <label>Name  </label>
          <input type="text" placeholder="Enter your name" onChange={(e)=>{setData({...data,name:e.target.value})}}></input>
        </div>
        <div>
          <label>Email  </label>
          <input type="email" placeholder="Enter your email" onChange={(e)=>{setData({...data,email:e.target.value})}}></input>
        </div>
        <div>
          <label>Password  </label>
          <input type="password" placeholder="Enter your password" onChange={(e)=>{setData({...data,password:e.target.value})}}></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
