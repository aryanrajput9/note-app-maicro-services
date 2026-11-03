import AuthRepository from "../repository/auth.repository.js";
import ApiError from "../utils/api-error.js";
import { generateRefreshToken } from "../utils/jwt.js";


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
    }
}

export default new AuthServices()