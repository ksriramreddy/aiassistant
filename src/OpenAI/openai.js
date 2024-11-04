import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: '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',
});
export const openai = new OpenAIApi(configuration);