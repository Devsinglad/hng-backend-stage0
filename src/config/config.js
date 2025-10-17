"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.port = exports.userStack = exports.userName = exports.userEmail = void 0;
require('dotenv').config();
exports.userEmail = process.env.USER_EMAIL || '';
exports.userName = process.env.USER_NAME || '';
exports.userStack = process.env.BACKEND_STACK || '';
exports.port = process.env.PORT || 3000;
;
exports.config = {
    userEmail: exports.userEmail,
    userName: exports.userName,
    userStack: exports.userStack,
    port: exports.port,
};
