import AuthRepository from "../repository/auth.repository.js";
import ApiError from "../utils/api-error.js";
import { comparePassword } from "../utils/bycrpt.js";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt.js";


class AuthServices {

    register = async (input: { name: string, email: string, password: string }) => {

        if (typeof input.name !== "string") {
            throw new ApiError("Name must be a string", 400)

        }

        if (typeof input.email !== "string") {
            throw new ApiError("email must be a string", 400)

        }

        if (typeof input.password !== "string") {
            throw new ApiError("password must be a string", 400)

        };

        const user = await AuthRepository.create(input);

        const refreshToken = generateRefreshToken({ id: user._id, email: user.email })


        return { user, refreshToken }
    };
    login = async (input: { email: string, password: string }) => {

        if (typeof input.email === "string") {
            throw new ApiError("senter valid email", 401)
        };
        if (typeof input.password === "string") {
            throw new ApiError("enter valid password", 401)
        };

        const user = await AuthRepository.findByEmail(input.email);

        if (!user) {
            throw new ApiError("user not found", 404)
        };

        const comparePass = await comparePassword(input.password, user.password)

        if (!comparePass) {
            throw new ApiError("Invalid password", 401);
        };

        const accessToken = generateAccessToken({ id: user._id, email: user.email });

        const refreshToken = generateRefreshToken({ id: user._id, email: user.email });

        return {
            user, accessToken, refreshToken
        }
    }
}

export default new AuthServices()