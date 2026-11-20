import noteRepository from "../repository/note-repository.js";
import ApiError from "../utils/api-error.js";
import { createNoteSchema } from "../validation/zod-validation.js";

import { Types } from "mongoose";



class noteServices {

    createNote = async (input: {
        title: string; content: string; user: Types.ObjectId; isPinned?: boolean; isFavorite?: boolean;
    }) => {

        const result = createNoteSchema.safeParse(input);

        if (!result.success) {
            throw new Error(
                result.error.issues.map((issue) => issue.message).join(", ")
            )
        }

        const user = await noteRepository.findById(input.user);

        if (!user) {
            throw new ApiError("unothorised person", 404)
        }

        const note = await noteRepository.create(input);

        return note

    }
}


export default new noteServices()