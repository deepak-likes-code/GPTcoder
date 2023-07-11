declare const functions: never[];
declare const write_file: (filename: string, content: string) => void;
declare const append_content: (filename: string, content: string) => string | null;
declare const read_file: (filename: string) => string | null;
declare const delete_file: (filename: string) => string | null;
declare const ask_clarification: (message: string) => string;
declare const list_files: () => string[] | null;

export { append_content, ask_clarification, delete_file, functions, list_files, read_file, write_file };
