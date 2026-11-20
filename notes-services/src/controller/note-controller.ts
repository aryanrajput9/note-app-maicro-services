import asyncHandler from "../utils/async-handler.js";
import type { Request, Response } from 'express'

import { Types } from "mongoose";
import noteRepository from "../repository/note-repository.js";
import { input } from "zod";
import noteServices from "../services/note-services.js";
import ApiResponse from "../utils/api-ressponse.js";


class noteController {

    createNote = asyncHandler(async (req: Request, res: Response): Promise<Response> => {


        const {
            title,
            content,
            user,
            isPinned = false,
            isFavorite = false
        }: {
            title: string;
            content: string;
            user: Types.ObjectId;
            isPinned?: boolean;
            isFavorite?: boolean;
        } = req.body;
        const note = await noteServices.createNote({
            title,
            content,
            user,
            isPinned,
            isFavorite
        });


        return res.status(201).json(
            new ApiResponse(
                "note create successfull ",
                201,
                note
            )
        )
    })
}


export default new noteController()