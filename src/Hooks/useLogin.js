import { firestore} from "../Firebase/firebase";
import { collection,where,query,getDocs } from "firebase/firestore";
import { useDispatch} from "react-redux";
import { loginUser } from "../store/userInfo";
import { useState} from "react";
import { notify } from "./useToast";
export function useLogin() {
    const dispatch = useDispatch();
    const [loading, isLoading] = useState(false)
    const [error, setError] = useState('')
    const userLogin  = async(data)=>{
        
        isLoading(true)
        const collec = collection(firestore, 'users');
        const q = query(collec,where('username','==',data.username))
        const user = []
        try {
            const querySnapshot = await getDocs(q)
            querySnapshot.forEach(doc=>{
                user.push({id:doc.id,...doc.data()})
            })
            console.log(user);
            if(user.length>0){
                dispatch(loginUser(user[0]))
                localStorage.setItem('user', JSON.stringify(user[0]))
                notify('Logged in successfully')
                isLoading(false)
            }
            else{
                setError('User not found')
                isLoading(false)
            }
        } catch (error) {
            return error
        }
        return user
    }
    return {
        userLogin,
        loading
    }
}

