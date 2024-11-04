import { firestore } from "../Firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export function useSignup () {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigation = useNavigate();
    const signupUser = async (data) => {
        setLoading(true);
        setError(null);
        const collec = collection(firestore,'users')
        try {
            await addDoc(collec , data)
            console.log(data);
            navigation('/')
        } catch (error) {
            console.log("signup error: " + error);
        }
    }
    return {
        signupUser,
        loading,
    }
}