import fs from 'fs';
import path from 'path';

export const functions = []


export const write_file = (filename: string, content: string): void => {

    console.log(`FUCNTION: Writing to file code/${filename}}........`)
    const directory = path.join(process.cwd(), 'code');

    // Create the 'code' directory if it doesn't exist
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory);
    }

    // Create the file in the 'code' directory with the provided content
    fs.writeFile(path.join(directory, filename), content, err => {
        if (err) {
            console.error(`Error writing file: ${err}`);
        } else {
            console.log(`File ${filename} has been successfully created in the 'code' folder.`);
        }
    });
}

export const append_content = (filename: string, content: string): string | null => {
    const directory = path.join(process.cwd(), 'code');
    const filePath = path.join(directory, filename);

    console.log(`FUNCTION: Appending to file code/${filename}........`)
    // Check if the file exists
    if (fs.existsSync(filePath)) {
        // If it exists, append the provided content to the file
        fs.appendFileSync(filePath, content);
        const finalContent = fs.readFileSync(filePath, 'utf-8');
        console.log(`Updated content of the file ${filename}:\n${finalContent}`);

        return finalContent;
    } else {
        // If it doesn't exist, return false
        console.error(`File not found: ${filename}`);
        return null;
    }
}

export const read_file = (filename: string): string | null => {
    const directory = path.join(process.cwd(), 'code');
    const filePath = path.join(directory, filename);

    try {
        // Try to read the file
        const content = fs.readFileSync(filePath, 'utf-8');
        return content;
    } catch (err) {
        // If an error occurred (likely the file was not found), log it and return null
        console.error(`Error reading file: ${err}`);
        return null;
    }
}
export const delete_file = (filename: string): string | null => {
    const directory = path.join(process.cwd(), 'code');
    const filePath = path.join(directory, filename);
    console.log(`FUNCTION: Deleting file code/${filename}........`)
    try {
        // Try to delete the file
        fs.unlinkSync(filePath);
        return `File ${filename} has been successfully deleted.`;
    } catch (err) {
        // If an error occurred (likely the file was not found), log it and return false
        console.error(`Error deleting file: ${err} `);
        return null;
    }
}

export const ask_clarification = (message: string): string => {
    const question = `###CHATGPT Asks a question 
    ##\n ${message} \n Answer:`
    return question
}


export const list_files = (): string[] | null => {
    const directory = path.join(process.cwd(), 'code');
    console.log(`FUNCTION: Listing files in code/........`)
    try {
        // Try to read the directory
        const files = fs.readdirSync(directory);

        // If no files found, return null
        if (files.length === 0) {
            return null;
        }

        return files;
    } catch (err) {
        // If an error occurred (likely the directory was not found), log it and return null
        console.error(`Error reading directory: ${err}`);
        return null;
    }
}