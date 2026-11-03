import express from 'express';
import { gbError } from './utils/globale-error-handler.js';
import cookieParser from 'cookie-parser'


const app = express();

app.use(express.json());

app.use(gbError);
app.use(cookieParser())

export default app