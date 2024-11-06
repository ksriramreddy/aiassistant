import { useDispatch } from "react-redux";
import { logoutUser } from "../store/userInfo";
import { useNavigate } from "react-router-dom";

export function useLogout(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logout = ()=>{
        dispatch(logoutUser())
        localStorage.removeItem('user')
        navigate('/login')
    }
    return {logout}
}