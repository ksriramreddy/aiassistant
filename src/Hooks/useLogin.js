import { firestore} from "../Firebase/firebase";
import { collection,where,query,getDocs } from "firebase/firestore";
import { useDispatch} from "react-redux";
import { loginUser } from "../store/userInfo";
import { useState} from "react";
// import { notify } from "./useToast";
import { useNavigation } from "react-router-dom";
import toast from "react-hot-toast";
export function useLogin() {
    const dispatch = useDispatch();
    // const navigation = useNavigation();
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
                toast.success('Logged in successfully')
                // navigation('/home')
                isLoading(false)
            }
            else{
                setError('User not found')
                toast.error('User not found')
                isLoading(false)
            }
        } catch (error) {
            toast.error('Unable to login')
            return error
        }
        return user
    }
    return {
        userLogin,
        loading
    }
}