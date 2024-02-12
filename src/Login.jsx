import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
  
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const navigate= useNavigate()
  
  const handleSubmit=(e) =>{
    e.preventDefault()
    axios.post('http://localhost:3001/login',{email, password})
    .then(result => {
      console.log(result)
      if(result.data ==="success"){
        navigate('/home')    
      }
      if(result.data==="norecord"){
        navigate('/register')
      }
    })
    .catch(err=>console.log(err))
  }

  
  return (
        
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
    <div className='bg-white p-3 rounded w-25'>
    <h1>Login</h1>
       <form onSubmit={handleSubmit}>
       
       <div>
        <label htmlFor="email"><b>email</b></label>
        <input type="text" onChange={(e)=> setEmail(e.target.value)} 
        placeholder='enter email' autoComplete='off' name='email' className='form-control rounded-0' required/>
        </div>
        

        <div>
          <label htmlFor="password"><b>password</b></label>
          <input type="password" placeholder='password' onChange={(e)=> setPassword(e.target.value) }required
           autoComplete='off' name='password' className='form-control rounded-0'/>
        
        </div>
        <br></br>
        <input type="submit" className='btn btn-success w-100 rounded-0'/>
    </form>
    <br />
    
    <Link to="/register" className='btn btn-outline-secondary w-100 rounded-0'>register</Link>
      
    </div>
   
    </div>
  
  )
}

export default Login
