
export function sendNotification(subject){
    console.log(Notification.permission);
    
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
    console.log(subject);
    new Notification(subject,{
        body: subject,
    })
}

setTimeout(() => {
    sendNotification('test')
}, 5000);

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