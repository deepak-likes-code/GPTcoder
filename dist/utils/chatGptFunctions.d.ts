declare const functions: ({
    name: string;
    description: string;
    parameters: {
        type: string;
        properties: {
            list: {
                type: string;
                description: string;
            };
            filename?: undefined;
            content?: undefined;
            message?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    parameters: {
        type: string;
        properties: {
            filename: {
                type: string;
                description: string;
            };
            content: {
                type: string;
                description: string;
            };
            list?: undefined;
            message?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    parameters: {
        type: string;
        properties: {
            filename: {
                type: string;
                description: string;
            };
            list?: undefined;
            content?: undefined;
            message?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    parameters: {
        type: string;
        properties: {
            message: {
                type: string;
                description: string;
            };
            list?: undefined;
            filename?: undefined;
            content?: undefined;
        };
        required: string[];
    };
})[];

export { functions };
