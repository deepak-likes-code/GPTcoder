// src/utils/messages.ts
import { ChatCompletionResponseMessageRoleEnum } from "openai";
var messages = [
  { role: ChatCompletionResponseMessageRoleEnum.User, content: "Hello, who are you?" },
  { role: ChatCompletionResponseMessageRoleEnum.Assistant, content: "I am an AI created by OpenAI. How can I help you today?" },
  { role: ChatCompletionResponseMessageRoleEnum.User, content: "I'd like to know your capabilties and functions." }
];

export {
  messages
};
