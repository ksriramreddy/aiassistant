import axios from "axios";
const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY;
export async function createResponse(prompt){
    try {
        const response = await axios.post("https://api.anthropic.com/v1/create_response", {
            prompt,
            api_key: apiKey,
            'Content-Type': 'application/json',
        });
        return response.data.response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}