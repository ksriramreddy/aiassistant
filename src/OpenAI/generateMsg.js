import { openai} from "./openai";

export async function generateResponse() {
    
    try {
        const response = await openai.completions.create({
            model: 'gpt-3.5-turbo',
            engine: "davinci",
            prompt: "whats your name",
            maxTokens: 1,
            temperature: 0.7,
            topP: 1,
            frequencyPenalty: 0.0,
            presencePenalty: 0.0,
        });
        console.log(prompt);
        const message = response.data.choices[0].text;
        console.log(message);
    } catch (error) {
        
        console.log("error",error.response ? error.response.data : error.message)
    }
}

// generateResponse();