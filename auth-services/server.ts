
import app from './src/app.js'
import connectDb from './src/config/db.js';
import env from './src/config/env.js';
import logger from './src/utils/logger.js';


async function startAuthService(): Promise<void> {
    try {

        await connectDb();
        app.listen(env.port, () => {
            logger.info(`Auth Services is running port ${env.port}`)
        })

    } catch (error) {
        logger.error(`${error}`)
        process.exit(1)
    }

};

startAuthService()