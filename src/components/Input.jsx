import React, { useState } from 'react';
import { useAddNotification } from '../Hooks/useAddNotification';
const Input = () => {
    const [subject, setSubject] = useState("")
    const [time, setTime] = useState("")
    const {addNotification} = useAddNotification()
    const handleSubmit = (e) => {
        e.preventDefault();
        addNotification({subject, time})
    }
    
  return (
    <div>
      <div className=' flex flex-col text-white'>
        <h1 className='text-center font-extrabold underline'>ADD NEW NOTIFICATION</h1>
        <form onSubmit={(e)=>{handleSubmit(e)}} action="" className=' text-white flex flex-col  gap-3' >
            <label htmlFor="subject">Subject:</label>
            <input required className='md:w-1/2 text-black w-full p-1 rounded-lg' type="text" id="subject" name="subject" onChange={(e)=>{setSubject(e.target.value)}} placeholder='Subject(one word)' />
            <label htmlFor="time">Time:</label>
            <input className='text-black md:w-1/2 w-full p-1 rounded-lg' required type="time" id="time" name="time" onChange={(e)=>{setTime(e.target.value)}} />
            <input className='text-black w-32 cursor-pointer  rounded-lg border p-1 bg-blue-500' type="submit" value="ADD" />
        </form>
      </div>
    </div>
  );
}

export default Input;
