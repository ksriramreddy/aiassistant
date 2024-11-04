import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useLogin} from '../Hooks/useLogin'
import { ToastContainer } from 'react-toastify'
const Login = () => {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [error , setError] = useState(0)
  // useEffect(()=>{
  // const getUser = async ()=>{
  //   try {
  //     const res = await axios.get('http://localhost:3000/login')
  //     console.log(res);
  //   } catch (error) {
  //     console.log("error in getting data",error);
  //   }
  // }

  // const handleSubmit =async (e)=>{
  //   e.preventDefault();
  //   try {
  //     const res = await axios.post('http://localhost:3000/login',{username,password})
  //     // console.log(res);
  //     await getUser()

  //   } catch (error) {
  //     console.log("erroer in sending data",error);
  //   }
  // }
  const {loading,userLogin} = useLogin()
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const user = await userLogin({username,password})
    if(user.length === 0){
      setError(1)
    }else{
      setError(0)
    }
    console.log(user);
  }
  return (
    <>
      <div className=' w-screen h-screen flex justify-center items-center'>
          <div className='w-full flex md:w-1/2 bg-black justify-center items-center text-white pt-3 pb-3 '>
              <form action="" onSubmit={(e)=>{handleSubmit(e)}} className=' flex flex-col gap-2 '>
                  <label htmlFor="username">Username</label>
                  <input required className=' border p-1 rounded-sm text-black ' onChange={e=>setUsername(e.target.value)} type="text" name="username"  placeholder='Username' />
                  <label htmlFor="username">Password</label>
                  <input required className=' border p-1 rounded-sm text-black' onChange={e=>setPassword(e.target.value)} type="password" name="pass"  placeholder='password'/>
                  <input type="submit" value="Login" className='border p-1 bg-blue-600 rounded-md cursor-pointer'/>
                  <h1>don't have an account? <a href="/">Register</a></h1>
                  {
                    error? <p className=' text-red-600'>Invalid Username or Password</p> : ""
                  }
              </form>
          </div>
      </div>
    </>
  )
}

export default Login