import { sendNotification } from "../SendNotification/sendNotification";
export function useSetNotifications(){
    const setNotification = (notification) => {
        const minutes = notification.time.slice(3, 5);
        const hours = notification.time.slice(0, 2);
        const now = new Date()
        const targetTime = new Date()
        targetTime.setHours(hours,minutes,0,0)
        let delay = targetTime - now
        if(delay < 0){
            delay += 24*60*60*1000
        }
        const closeTimeout = setTimeout(()=>{
            sendNotification(notification.subject)
        },delay)
    }
    return {
        setNotification
    }
}