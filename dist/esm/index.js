import {
  functions
} from "./chunk-53OGK3FD.js";
import {
  messages
} from "./chunk-CW7CI7RM.js";

// src/index.ts
import { OpenAIApi, Configuration } from "openai";
import { config } from "dotenv";
config();
var configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
var openai = new OpenAIApi(configuration);
var chat_completion = await openai.createChatCompletion({
  model: "gpt-3.5-turbo-0613",
  messages,
  functions,
  function_call: "auto"
});
var message = chat_completion.data?.choices[0]?.message?.function_call;
console.log({ message });
