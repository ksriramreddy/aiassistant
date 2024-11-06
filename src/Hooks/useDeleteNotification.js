import { useDispatch, useSelector } from "react-redux";
import { firestore } from "../Firebase/firebase";
import {collection,updateDoc,doc} from 'firebase/firestore'
import { loginUser } from "../store/userInfo";

export const useDeleteNotification = ()=>{
    const user = useSelector(state=>state.user)
    const dispatch = useDispatch()
    const userDoc = doc(firestore,'users',user.id)
    // console.log("user",user);
    
    const deleteNotification = async (notification)=>{
        const updateUserDoc = {
            ...user,
            notifications : user.notifications.filter((noti,i)=>{
                return noti != notification;
            })
        }
        await updateDoc(userDoc,updateUserDoc)
        dispatch(loginUser(updateUserDoc))
        localStorage.setItem('user',JSON.stringify(updateUserDoc))
        console.log(updateUserDoc);
    }
    return {
        deleteNotification,
    }
}