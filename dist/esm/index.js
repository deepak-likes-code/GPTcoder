import {
  ask_clarification
} from "./chunk-D4CI32V4.js";
import {
  messages
} from "./chunk-3CBYVFTQ.js";

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
  messages
  // functions: functions,
  // function_call: "auto"
});
var message = chat_completion.data?.choices[0]?.message?.content;
console.log(ask_clarification("what files are in the code directory?"));
