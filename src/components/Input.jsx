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
      <div className='w-1/2 bg-black flex flex-col text-white'>
        <h1>ADD NEW NOTIFICATION</h1>
        <form onSubmit={(e)=>{handleSubmit(e)}} action="" className=' text-white flex flex-col justify-center items-start gap-3' >
            <label htmlFor="subject">Subject:</label>
            <input required type="text" id="subject" name="subject" onChange={(e)=>{setSubject(e.target.value)}} placeholder='Subject(one word)' />
            <label htmlFor="time">Time:</label>
            <input required type="time" id="time" name="time" onChange={(e)=>{setTime(e.target.value)}} />
            <input className='text-black w-48   border p-2 bg-blue-500' type="submit" value="ADD" />
        </form>
      </div>
    </div>
  );
}

export default Input;
