import { ChatCompletionResponseMessageRoleEnum } from "openai";

export const messages = [
    { role: ChatCompletionResponseMessageRoleEnum.User, content: "Hello, who are you?" },
    { role: ChatCompletionResponseMessageRoleEnum.Assistant, content: "I am an AI created by OpenAI. How can I help you today?" },
    { role: ChatCompletionResponseMessageRoleEnum.User, content: "Write a file called chat.py" },
]