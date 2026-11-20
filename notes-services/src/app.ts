import express from 'express';

import cookieParser from 'cookie-parser'
import { gbError } from './utils/globale-error-handler.js';
import route from './routes/notes.route.js';


const app = express();

app.use(express.json());

app.use(gbError);
app.use(cookieParser())


app.use("/api/v1/notes", route)


export default app