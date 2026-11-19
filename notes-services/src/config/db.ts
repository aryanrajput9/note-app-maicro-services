import mongoose from 'mongoose';
import env from './env.js';
import logger from '../utils/logger.js';

const Host = "localhost"

async function connectDb(): Promise<void> {

    try {
        await mongoose.connect(env.mongoUri);
        logger.info(`mongoose connected✅ ${Host}`)

    } catch (error) {
        logger.error("Database connection failed");
    }

};

export default connectDb