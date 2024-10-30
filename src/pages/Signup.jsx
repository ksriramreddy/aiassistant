import React, { useState } from 'react'
import axios from 'axios'
function Signup() {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const handleSubmit =async (e)=>{
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/register',{username,password})
      console.log(res);
      
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className=' w-screen h-screen flex justify-center items-center'>
          <div className='w-full flex md:w-1/2 bg-black justify-center items-center text-white pt-3 pb-3 '>
              <form action="" onSubmit={(e)=>{handleSubmit(e)}} className=' flex flex-col gap-2 '>
                  <label htmlFor="username">Username</label>
                  <input className=' border p-1 rounded-sm text-black ' onChange={e=>setUsername(e.target.value)} type="text" name="username"  placeholder='Username' />
                  <label htmlFor="username">Password</label>
                  <input className=' border p-1 rounded-sm text-black' onChange={e=>setPassword(e.target.value)} type="password" name="pass"  placeholder='password'/>
                  <input type="submit" value="Register" className='border p-1 bg-blue-600 rounded-md cursor-pointer'/>
                  <h1>already have an account? <a href="/login">Login</a></h1>
              </form>

          </div>
      </div>
    </>
  )
}

export default Signup