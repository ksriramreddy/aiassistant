import { firestore } from "../Firebase/firebase";
import { arrayUnion, collection,doc,updateDoc } from "firebase/firestore";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/userInfo";
 export function useAddNotification () {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    console.log('logging user from add notification', user);
    
    const [loading, setLoading] = useState(false);
    const addNotification = async (notification) => {
        setLoading(true);
        const userDoc = doc(firestore , 'users', user.id)
        try {
            const updateUserDoc = {
                ...user,
                notifications: [...user.notifications, notification],
            }
            await updateDoc(userDoc,updateUserDoc)
            dispatch(loginUser(updateUserDoc))
        } catch (error) {
            console.log("add notification", error);
        }
    };
    return { addNotification, loading };
}