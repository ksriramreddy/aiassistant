// import { generateResponse } from "../OpenAI/generateMsg";
import { sendNotification } from "../SendNotification/sendNotification";
// import {createResponse} from '../Anthropic/getResponse'
import { json } from "react-router-dom";
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
        
        const closeTimeout = setTimeout (async ()=>{
            let aiMessage = ''
            try {
                // generateResponse(notification.subject).then((res)=>{
                //     aiMessage = res.choices[0].message.content
                //     console.log(aiMessage);
                // })
                sendNotification(notification.subject,aiMessage)
                console.log("ai",aiMessage);
            } catch (error) {
                console.log(error.message);
            }
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