import React from 'react'
// import { useGenerateMsg } from '../Hooks/useGenerateMsg'
import {useSetNotifications} from '../Hooks/useSetNotification'
import { useDeleteNotification } from '../Hooks/useDeleteNotification'




const Notification = ({notification}) => {
    const {setNotification} = useSetNotifications()
    const closeTimeout = setNotification(notification)
    const {deleteNotification} = useDeleteNotification()
    const handleDelete = () => {
        deleteNotification(notification)
        clearTimeout(closeTimeout)
    }
    
  return (
    <div>
        <div className='flex flex-row p-2 w-full bg-blue-800 rounded-lg items-center justify-around'>
          <h1>{notification.subject}</h1>
          <h1>{notification.time}</h1>
          <button className='bg-red-500 p-2 rounded-md' onClick={handleDelete}>Delete</button>
        </div>
       
    </div>
  )
}

export default Notification