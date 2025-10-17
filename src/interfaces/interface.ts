export interface User {
    email: string;
    name: string;
    stack: string;
}
export interface ApiResponse {
    status: string;
    user: User;
    timestamp: string;
    fact: string;
}

export interface HttpError extends Error {
    status: number;
}