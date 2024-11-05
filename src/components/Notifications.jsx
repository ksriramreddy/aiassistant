import React from 'react'
import { useSelector } from 'react-redux'
import Notification from './Notification'
import { useGenerateMsg } from '../Hooks/useGenerateMsg'
// import { useSetNotification } from '../Hooks/useSetNotification'
const Notifications = () => {
    const user = useSelector(state=>state.user)
    // const {generateMessage} = useGenerateMsg()
    // generateMessage("whats your name")
    // useSetNotification()
  return (
    <div className='flex flex-col gap-5 h-80 overflow-y-scroll scroll-smooth'>
        <h1 className='text-center font-extrabold underline'>ALL NOTIFICATIONS</h1>
        {
            user && user.notifications.length === 0 && <h2 className='text-center text-white'>No Notifications</h2>
        }
        {
            user && user.notifications.map((notification,i) => (
                <div  key={i}>
                    <Notification notification={notification}/>
                </div>
            ))
        }
    </div>
  )
}

export default Notifications