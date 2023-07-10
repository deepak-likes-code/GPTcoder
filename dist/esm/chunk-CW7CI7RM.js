// src/utils/messages.ts
import { ChatCompletionResponseMessageRoleEnum } from "openai";
var messages = [
  { role: ChatCompletionResponseMessageRoleEnum.User, content: "Hello, who are you?" },
  { role: ChatCompletionResponseMessageRoleEnum.Assistant, content: "I am an AI created by OpenAI. How can I help you today?" },
  { role: ChatCompletionResponseMessageRoleEnum.User, content: "Write a file called chat.py" }
];

export {
  messages
};
