require('dotenv').config();

export const userEmail = process.env.USER_EMAIL || '';
export const userName = process.env.USER_NAME || '';
export const userStack = process.env.BACKEND_STACK || '';
export const port = process.env.PORT || 3000;;

export const config = {
    userEmail,
    userName,
    userStack,
    port,
}