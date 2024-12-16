import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios"
const Login = () => {
    const [a,setA]=useState({
        name:"",password:""
    });
    const [errdata,setErrdata]=useState("");

    const submitfn=(e)=>{
       e.preventDefault();  //navigate("/home")
       axios.post('http://localhost:4000/auth/login',a).then((res)=>{
       console.log(res.data);
       alert(res.data.message);
       localStorage.setItem("token",res.data.token);
       localStorage.setItem("userdetails",JSON.stringify(res.data.userdata))
        navigate('/home')
       }).catch((err)=>{console.log(err.response.data.message);
        setErrdata(err.response.data.message)
       })
      
       
       
    }
    const navigate =useNavigate()
    const addfns=(even)=>{
        setA({...a,[even.target.name]:even.target.value})

    }
  return (
    <div className="container mt-5" style={{height:"100vh"}}>
    {/* Row starts */}<h1 className='text-center fst-italic'>Login Form</h1>
    <div className="row mx-auto ">
      {/* Column setup */}
      <form onSubmit={submitfn}
       className="col-12 col-md-6 col-lg-6 border mx-auto rounded" style={{marginTop:"150px",backgroundColor:"whitesmoke"}}>
        <div className="p-3 mt-4">
          <input
            type="text"
            className="form-control w-100 border"
            placeholder="Enter text here"
            name="name"
            value={a.name}
            onChange={addfns} required
          />
        </div>
        <div className='p-3 '>
        <input type='password' required className='form-control w-100 ' 
        name="password"
        value={a.password}
        placeholder='Enter Your Password here...'
        onChange={addfns}/>
      </div>
      {errdata.length>0 && (<h3 className='text-secondary'>{errdata}</h3>)}
      <div className='p-3 mx-auto '>
       <button className='btn btn-outline-info  w-100'>Login</button>
      </div>
      <div className='d-flex justify-content-evenly my-4'>
        <a href="#" className='text-danger '>ForgotPassword?</a>
        <a href='#' >New user(Register)</a>
      </div>
      </form>
      
    </div>
  </div>
  )
}

export default Login;