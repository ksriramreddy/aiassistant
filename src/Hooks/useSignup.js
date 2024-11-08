import { firestore } from "../Firebase/firebase";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import {useShowToast} from "./useToast";
export function useSignup () {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigation = useNavigate();
    // const showToast = useShowToast
    const signupUser = async (data) => {
        setLoading(true);
        setError(null);
        const collec = collection(firestore,'users')
        const q = query(collec,where('username',"==",data.username))
        const querySnapshot = await getDocs(q)
        if(!querySnapshot.empty){
            console.log("username already present");
            // showToast('success','username already exists','error')
            toast('error')
            return
        }
        try {
            await addDoc(collec , data)
            console.log(data);
            // showToast('success','signup successful. please Login','success')
            navigation('/login')
        } catch (error) {
            console.log("signup error: " + error);
        }
    }
    return {
        signupUser,
        loading,
    }
}