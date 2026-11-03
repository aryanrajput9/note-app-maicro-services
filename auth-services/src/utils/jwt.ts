import jwt, { type JwtPayload } from 'jsonwebtoken'
import env from '../config/env.js';


export const generateRefreshToken = (payload: JwtPayload) => {

    return jwt.sign(payload, env.refreshToken);
};

export const generateAccessToken = (payload: JwtPayload) => {
    return jwt.sign(payload, env.accessToken)
};

export const verifyRefreshToken = (token: string) => {
    return jwt.verify(token, env.refreshToken)
};

export const verifyAccessToken = (token: string) => {
    return jwt.verify(token, env.accessToken)
}