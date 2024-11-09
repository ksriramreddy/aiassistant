import { openai} from "./openai";

export async function generateResponse(message) {
    
    try {
        return await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            temperature: 0.7,
            messages: [
                { "role": "system", "content": "You are a helpful assistant." },
                { "role": "user", "content":  `give me one line motivation message to ${message}` }
              ],
        })
        
    } catch (error) {
        console.log("error",error.response ? error.response.data : error.message)
    }
}
