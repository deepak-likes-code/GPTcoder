import { OpenAIApi, Configuration } from "openai";
import { config } from "dotenv";
import { messages } from "./utils/messages.ts";
import { write_file, read_file, delete_file, list_files, append_content, ask_clarification } from "./utils/functions.ts";
import { functions } from "./utils/chatGptFunctions.ts";

config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});


const openai = new OpenAIApi(configuration);
const chat_completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo-0613",
    messages: messages,
    functions: functions,
    function_call: "auto"


});

const message = chat_completion.data?.choices[0]?.message?.function_call as string;
console.log({ message });

// console.log(read_file("chatbot.py"))

// append_content("chatbot.py", "print('hello world')")

// console.log(ask_clarification("what files are in the code directory?"))






