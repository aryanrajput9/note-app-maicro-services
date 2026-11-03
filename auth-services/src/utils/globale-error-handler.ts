import type { NextFunction, Request, Response } from "express";


interface AppError extends Error {
    statusCode: number
}

export const gbError = (err: AppError, _req: Request, res: Response, next: NextFunction) => {

    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal server Error";

    return res.status(statusCode).json({
        success: false,
        message
    })
}