import { NextFunction, Request, Response } from "express";
import { getCatFact } from "./catApiController";
import { config } from "../config/config";
import { ApiResponse } from "../interfaces/interface";

export const getMe = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const fact = await getCatFact();
        const timestamp = new Date().toISOString();
        const response: ApiResponse = {
            status: 'success',
            user: {
                email: config.userEmail,
                name: config.userName,
                stack: config.userStack,
            },
            timestamp: timestamp,
            fact: fact
        };
        res.status(200).json(response);
    } catch (err) {
        next(err);
        console.error(err);
    }

}