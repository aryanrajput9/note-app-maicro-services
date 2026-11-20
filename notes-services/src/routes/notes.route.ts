import { Router } from 'express'
import noteController from '../controller/note-controller.js';


const route = Router();


route.post("/", noteController.createNote);


export default route