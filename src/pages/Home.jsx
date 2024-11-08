import React from 'react'
import Input from '../components/Input'
import Notifications from '../components/Notifications'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Home = () => {
  // const {id} = useParams()
  // console.log(id);
  // const user = useSelector(state=>state.user)
  // if(user.username != id){
  //   return(
  //     <div>
  //       <h1>Unauthorised Access</h1>
  //     </div>
  //   )
  // }
  return (
    <div className='w-full  flex-row bg-black h-screen p-6'>
      <div className='w-1/2 m-auto rounded-lg p-3 bg-slate-700 flex gap-6 flex-col '>
        <Input/>
        <Notifications/> 
      </div>
    </div>
  )
}

export default Home