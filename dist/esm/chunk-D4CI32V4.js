// src/utils/functions.ts
import fs from "fs";
import path from "path";
var functions = [];
var write_file = (filename, content) => {
  console.log(`FUCNTION: Writing to file code/${filename}}........`);
  const directory = path.join(process.cwd(), "code");
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }
  fs.writeFile(path.join(directory, filename), content, (err) => {
    if (err) {
      console.error(`Error writing file: ${err}`);
    } else {
      console.log(`File ${filename} has been successfully created in the 'code' folder.`);
    }
  });
};
var append_content = (filename, content) => {
  const directory = path.join(process.cwd(), "code");
  const filePath = path.join(directory, filename);
  console.log(`FUNCTION: Appending to file code/${filename}........`);
  if (fs.existsSync(filePath)) {
    fs.appendFileSync(filePath, content);
    const finalContent = fs.readFileSync(filePath, "utf-8");
    console.log(`Updated content of the file ${filename}:
${finalContent}`);
    return finalContent;
  } else {
    console.error(`File not found: ${filename}`);
    return null;
  }
};
var read_file = (filename) => {
  const directory = path.join(process.cwd(), "code");
  const filePath = path.join(directory, filename);
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    return content;
  } catch (err) {
    console.error(`Error reading file: ${err}`);
    return null;
  }
};
var delete_file = (filename) => {
  const directory = path.join(process.cwd(), "code");
  const filePath = path.join(directory, filename);
  console.log(`FUNCTION: Deleting file code/${filename}........`);
  try {
    fs.unlinkSync(filePath);
    return `File ${filename} has been successfully deleted.`;
  } catch (err) {
    console.error(`Error deleting file: ${err} `);
    return null;
  }
};
var ask_clarification = (message) => {
  const question = `###CHATGPT Asks a question 
    ##
 ${message} 
 Answer:`;
  return question;
};
var list_files = () => {
  const directory = path.join(process.cwd(), "code");
  console.log(`FUNCTION: Listing files in code/........`);
  try {
    const files = fs.readdirSync(directory);
    if (files.length === 0) {
      return null;
    }
    return files;
  } catch (err) {
    console.error(`Error reading directory: ${err}`);
    return null;
  }
};

export {
  functions,
  write_file,
  append_content,
  read_file,
  delete_file,
  ask_clarification,
  list_files
};
