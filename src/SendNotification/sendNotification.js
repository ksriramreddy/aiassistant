// import { generateResponse } from "../OpenAI/generateMsg";
let message = ''
export function sendNotification(subject,aiMessage){
    console.log(Notification.permission);
    message = aiMessage
    console.log("ai message: " + aiMessage);
    if(Notification.permission === 'granted'){
        createNotification(subject)
    }
    else if(Notification.permission === 'default'){
        Notification.requestPermission()
        .then(permission => {
            if(permission === 'granted'){
                createNotification(subject)
            }
            else if(permission === 'denied'){
                console.log('Notification permission denied');
            }
            else{
                console.log('Notification permission request failed');
        }
    })
}
}
function createNotification(subject) {
    new Notification(subject,{
        body: message,
    })
}

// export function createNotification(){
//     setTimeout(() => {
//         console.log('hbjhb');
//         if(Notification.permission === 'granted'){
//             new Notification("text",{
//                 body: "text",
//                 vibrate: [100, 50, 100],
//                 tag: '111111',
//             })
//         }
//         else if(Notification.permission === 'default'){
//             Notification.requestPermission().then((pre)=>{
//                 console.log('ok');
                
//                 if(pre === 'granted'){
//                     new Notification("ajajaa",{
//                         body: "ajaj",
//                         vibrate: [100, 50, 100],
//                         tag: 'iiix',
//                     })
//                 }
//                 else if(pre === 'denied'){
//                     console.log('Notification permission denied');
//                 }
//                 else{
//                     console.log('Notification permission request failed');
//                 }
//             })
//         }
//         else{
//             console.log('Notification permission request failed');
//         }
//     }, 1000);
// }