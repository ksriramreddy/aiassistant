import { useDispatch } from "react-redux";
import { logoutUser } from "../store/userInfo";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogout(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logout = ()=>{
        dispatch(logoutUser())
        localStorage.removeItem('user')
        toast.success("User logged out")
        navigate('/login')
    }
    return {logout}
}