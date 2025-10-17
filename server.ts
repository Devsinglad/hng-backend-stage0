import cors from "cors";
import express from "express";
import { logger } from "./src/middleware/logEvents";
import corsOptions from "./src/config/corOption";
import { config } from "./src/config/config";
import errorHandler from "./src/middleware/errorHandler";
import { user } from "./src/routes";
import { NextFunction, Response, Request } from "express";
import createHttpError from "http-errors";
require('dotenv').config();
// const express = require('express');

const app = express();

// middleware for  Content-Type
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
});

// built-in middleware for json
app.use(express.json());


// custom middleware logger
app.use(logger);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// routes
app.use('/', user);

app.all(/.*/, (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(404);
        throw createHttpError.NotFound('Route does not exist');
    } catch (error) {
        next(error);
    }
});
app.use(errorHandler);





app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
    console.log(`Profile endpoint: http://localhost:${config.port}/me`);
});


