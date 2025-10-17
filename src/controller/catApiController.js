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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCatFact = getCatFact;
const axios_1 = __importDefault(require("axios"));
const CAT_FACT_API = 'https://catfact.ninja/fact';
const API_TIMEOUT = 5000;
function getCatFact() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(CAT_FACT_API, {
                timeout: API_TIMEOUT,
            });
            return response.data.fact;
        }
        catch (error) {
            console.error('Error fetching cat fact:', error instanceof Error ? error.message : 'Unknown error');
            return 'Cats are wonderful creatures full of mystery and charm.';
        }
    });
}
