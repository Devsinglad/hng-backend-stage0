"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMe = void 0;
const catApiController_1 = require("./catApiController");
const config_1 = require("../config/config");
const getMe = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fact = yield (0, catApiController_1.getCatFact)();
        const timestamp = new Date().toISOString();
        const response = {
            status: 'success',
            user: {
                email: config_1.config.userEmail,
                name: config_1.config.userName,
                stack: config_1.config.userStack,
            },
            timestamp: timestamp,
            fact: fact
        };
        res.status(200).json(response);
    }
    catch (err) {
        next(err);
        console.error(err);
    }
});
exports.getMe = getMe;
