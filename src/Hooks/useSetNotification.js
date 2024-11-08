import { sendNotification } from "../SendNotification/sendNotification";
import {createResponse} from '../Anthropic/getResponse'
export function useSetNotifications(){
    const setNotification = async (notification) => {
        const minutes = notification.time.slice(3, 5);
        const hours = notification.time.slice(0, 2);
        const now = new Date()
        const targetTime = new Date()
        targetTime.setHours(hours,minutes,0,0)
        let delay = targetTime - now
        if(delay < 0){
            delay += 24*60*60*1000
        }
        // const response = await createResponse(notification.subject)
        // console.log(response)
        const closeTimeout = setTimeout(()=>{
            sendNotification(notification.subject)
            return ()=>{
                clearTimeout(closeTimeout)
                console.log('Notification closed')
            }
        },delay)
    }
    return {
        setNotification,
    }
}