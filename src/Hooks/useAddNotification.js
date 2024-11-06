import { firestore } from "../Firebase/firebase";
import { arrayUnion, collection,doc,getDocs,query,updateDoc, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/userInfo";
// import { useLoadNotifications } from "./useLoadNotifications";
 export function useAddNotification () {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const [loading, setLoading] = useState(false);
    
    useEffect(()=>{
        const useLoadNotifications = async ()=>{
            const collec = collection(firestore,'users')
            const q = query(collec,where('username','==',user.username))
            const newUser = []
            const querySnapshot = await getDocs(q)
            querySnapshot.forEach(doc=>{
                newUser.push({id:doc.id,...doc.data()})
                console.log(doc.data());
                
            })
            console.log("newUser: " + newUser);
        }
        useLoadNotifications()
    },[user])
    const addNotification = async (notification) => {
        setLoading(true);
        const userDoc = doc(firestore , 'users', user.id)
        // useLoadNotifications()
        try {
            const updateUserDoc = {
                ...user,
                notifications: [...user.notifications, notification],
            }
            await updateDoc(userDoc,updateUserDoc)
            dispatch(loginUser(updateUserDoc))
            localStorage.setItem('user',JSON.stringify(updateUserDoc))
        } catch (error) {
            console.log("add notification", error);
        }
    };  
    return { addNotification, loading };
}