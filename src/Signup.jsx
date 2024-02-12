import { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Signup() {
  
  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const navigate= useNavigate()
  
  const handleSubmit=(e) =>{
    e.preventDefault()
    axios.post('http://localhost:3001/register',{name, email, password})
    .then(result => {console.log(result)
    navigate('/login')})
    .catch(err=>console.log(err))
  }

  return (
    
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
    <div className='bg-white p-3 rounded w-25'>
    <h1>register</h1>
       <form onSubmit={handleSubmit} >
       
       <div>
        <label htmlFor="name"><b>name</b></label>
        <input type="text" placeholder='enter name'
         autoComplete='off' name='name' required
         onChange={(e)=> setName(e.target.value)}
         
         className='form-control rounded-0'/>
        
        </div>
       
       <div>
        <label htmlFor="email"><b>email</b></label>
        <input type="text" 
        onChange={(e)=>{ setEmail(e.target.value)}}
         
        placeholder='enter email' autoComplete='off' required name='email' className='form-control rounded-0'/>
        </div>
        

        <div>
          <label htmlFor="password"><b>password</b></label>
          <input type="password" 
          onChange={(e)=> setPassword(e.target.value)}
          required
          placeholder='password' autoComplete='off' name='password' className='form-control rounded-0'/>
        
        </div>
        <br></br>
        <center><input type="submit" required className='btn btn-success w-100 rounded-0' value={"register"}/></center>
    </form>
    <br />

    <Link to="/login" className='btn btn-outline-secondary w-100 rounded-0'>login</Link>
      
    </div>
   
    </div>
  
  )


}

export default Signup
