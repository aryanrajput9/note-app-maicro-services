import type { Request, Response } from "express";
import asyncHandler from "../utils/async-handler.js";
import AuthServices from "../services/auth.service.js";
import ApiResponse from "../utils/api-ressponse.js";
import sanitizeResponse from "../utils/sanitizeResponse.js";




class AuthController {

    register = asyncHandler(async (req: Request, res: Response): Promise<Response> => {

        const { name, email, password } = req.body;

        const { user, refreshToken } = await AuthServices.register({ name, email, password })

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        })

        return res.status(201).json(
            new ApiResponse(
                "user create successfull",
                201,
                sanitizeResponse(user)

            )
        )

    })
};


export default AuthController