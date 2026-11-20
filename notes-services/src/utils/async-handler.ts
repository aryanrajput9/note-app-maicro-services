import type { NextFunction, Request, Response, RequestHandler } from "express";

const asyncHandler = (requestHandler: (req: Request, res: Response) =>
    Promise<unknown>): RequestHandler => {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(requestHandler(req, res)).catch((error) => next(error))
    }
}

export default asyncHandler