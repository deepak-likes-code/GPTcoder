export const functions = [
    {
        "name": "list_files",
        "description": "Lists all files in the code directory",
        "parameters": {
            "type": "object",
            "properties": {
                "list": {
                    "type": "string",
                    "description": "Set always to 'list'"
                }
            },
            "required": ["list"]
        }

    },

    {
        "name": "append_content",
        "description": "Appends content to end of the file with given name",
        "parameters": {
            "type": "object",
            "properties": {
                "filename": {
                    "type": "string",
                    "description": "Name of the file to append content to"
                },
                "content": {
                    "type": "string",
                    "description": "Content to append to the given file"
                }
            },
            "required": ["filename", "content"]
        }
    },

    {
        "name": "read_file",
        "description": "Reads the content of the file with given name",
        "parameters": {
            "type": "object",
            "properties": {
                "filename": {
                    "type": "string",
                    "description": "Name of the file to read"
                }
            },
            "required": ["filename"]
        }
    },


    {
        "name": "delete_file",
        "description": "Deletes the file with given name",
        "parameters": {
            "type": "object",
            "properties": {
                "filename": {
                    "type": "string",
                    "description": "Name of the file to delete"
                }
            },
            "required": ["filename"]
        }
    },

    {
        "name": "write_file",
        "description": "Writes content to the file with given name",
        "parameters": {
            "type": "object",
            "properties": {
                "filename": {
                    "type": "string",
                    "description": "Name of the file to write to"
                },
                "content": {
                    "type": "string",
                    "description": "Content to write to the given file"
                }
            },
            "required": ["filename", "content"]
        }
    },


    {
        "name": "ask_clarification",
        "description": "Asks a question if the given task is unclear",
        "parameters": {
            "type": "object",
            "properties": {
                "message": {
                    "type": "string",
                    "description": "Message to ask clarification for"
                }
            },
            "required": ["message"]
        }
    }
]