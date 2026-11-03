import dotenv from 'dotenv';
import type { env } from '../types/env-types.js';
dotenv.config();


const required = (name: string, fallback?: string): string => {
    const value = process.env[name] ?? fallback;

    if (value === undefined || value.trim() === "") {
        throw new Error(`env is missing ${name}`)
    }

    return value
};

const env: env = {
    port: Number(required("PORT", "3000")),
    mongoUri: required("MONGO_URL"),
    nodeEnv: required("NODE_ENV"),
    saltRound: Number(required("SALT_ROUND")),
    refreshToken: required("REFRESH_TOKEN"),
    accessToken: required("ACCESS_TOKEN")
};

export default env