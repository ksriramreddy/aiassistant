// import dotenv from "dotenv";
// import { Configuration, OpenAIApi } from "openai";
import {OpenAI} from 'openai'

// dotenv.config();

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

// console.log("API",apiKey);


export const openai = new OpenAI({
  apiKey:import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

