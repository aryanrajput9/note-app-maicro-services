import winston from 'winston';
import env from '../config/env.js';

winston.addColors({
    error: "bold red",
    warn: "bold yellow",
    info: "bold magenta",
    debug: "bold cyan",
});

const logger = winston.createLogger({
    level: env.nodeEnv === "production" ? "info" : "debug",

    format: winston.format.combine(
        winston.format.timestamp({
            format: "YY-MM-HH:ms:ss",
        }),


        winston.format.errors({ stack: true }),

        winston.format.printf(({ timestamp, level, message, stack }) => {
            return `${timestamp} [${level.toUpperCase()}]: ${stack ?? message}`;
        }),

        winston.format.colorize({ all: true, }),
    ),

    transports: [
        new winston.transports.Console()
    ]
})

export default logger