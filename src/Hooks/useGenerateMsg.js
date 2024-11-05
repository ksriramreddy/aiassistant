import { useState } from "react";
import { generateResponse } from "../OpenAI/generateMsg";
import { useSelector } from "react-redux";

export function useGenerateMsg() {
    
    const user = useSelector((state) => state.user);
    const [msg, setMsg] = useState("");
    const generateMessage = async (input) => {
        try {
            const response = await generateResponse(input);
            setMsg(response);
            // console.log(response);
        } catch (error) {
            // console.log(error.message);
            return
        }
        return msg
    };
    return { generateMessage };
}