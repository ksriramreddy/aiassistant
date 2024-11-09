// import Anthropic from "@anthropic-ai/sdk";

// const anthropic = new Anthropic({
//     apiKey : import.meta.env.VITE_ANTHROPIC_API_KEY,
//     dangerouslyAllowBrowser: true, // This is required for the SDK to work in a browser environment
// })

// const msg = await anthropic.messages.create({
//     model: "claude-3-5-sonnet-20241022",
//     max_tokens: 1024,
//     messages: [{ role: "user", content: "Hello, Claude" }],
// });
// console.log(msg);







import axios from "axios";
const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY;
export async function createResponse(prompt){
    try {
        const response = await axios.post("https://api.anthropic.com/v1/create_response", {
            prompt,
            api_key: apiKey,
        },{
            headers:{
                'Authorization': `Bearer ${apiKey}` , // Add your Anthropic API key here
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin' : '*'
            }
        });
        return response.data.response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
