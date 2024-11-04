import { openai } from "./openai";

async function generateResponse(prompt) {
    try {
        const response = await openai.Completion.create({
            engine: "davinci",
            prompt: prompt,
            maxTokens: 1000,
            temperature: 0.7,
            topP: 1,
            frequencyPenalty: 0.0,
            presencePenalty: 0.0,
        });
        const message = response.data.choices[0].text;
        console.log();
    } catch (error) {
        
    }
}