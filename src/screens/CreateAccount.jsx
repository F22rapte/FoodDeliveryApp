import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function CreateAccount() {
      
    const [credentials,setCredentials]=useState({name:"",email:"",password:"",Geolocation:"",})
     
    const handleSubmit= async(e)=>{
    e.preventDefault(JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.Geolocation}));
    console.log();
    const response= await fetch("http://localhost:5000/api/createuser",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.Geolocation}),
    });

     const json=await response.json();
     console.log(json);
     if(!json.success){
      alert("Enter Valid Credentials")
     }
     
    };
   const onchange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value});
    }
  return (
    <>
    <div className='container'>
    <form onSubmit={handleSubmit}>
     <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control"  name='name' value={credentials.name} onChange={onchange} />
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' value={credentials.email} onChange={onchange} id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' value={credentials.password}  onChange={onchange} id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
    <input type="text" className="form-control" name='Geolocation' value={credentials.Geolocation} onChange={onchange} id="exampleInputPassword1" />
  </div>
 
  <button type="submit" className="btn btn-success">Submit</button>
 <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>

  
</form> 


</div>  
    </>
  )
}
