import React, { useState } from 'react'

function App() {
  const[toggle,setToggle]= useState(false)
  const [data , setData] = useState({
    username: "",
    email: "",
    password :""
  })
  function handleclick(e){
      e.preventDefault();
      setToggle(true )
  }
 
   return (
    <div>
      <form>
        <label>Enter Username</label>
        <input type='text' value={data.username} onChange={(e)=> setData({...data,username:e.target.value})}/> <br/>
      <br/>
    <label>Enter Email</label>
    <input type='email' value={data.email} onChange={(e)=> setData({...data,email:e.target.value})}/><br/>
    <label>Enter password</label>
    <input type='password' value={data.password} onChange={(e)=> setData({...data,password:e.target.value})}></input>
    <button onClick={(e)=>{handleclick(e)}}>Submit</button>
      </form>
    
      <div>
        <h1>Your Username :-{data.username} </h1>
        <h1>Email :- {data.email} </h1>
        <h1>Password :- {data.password} </h1>
      </div>
    
    </div>
  )
}


export default App