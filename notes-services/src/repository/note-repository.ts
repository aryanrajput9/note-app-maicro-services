import { Note } from "../model/note-model.js";
import type { INote } from "../types/note-types.js";

import { Types } from "mongoose";

class NoteRepository {

    create = async (input: INote) => {

        const note = await Note.create(input);

        return note;
    };
    findById = async (userId: Types.ObjectId) => {

        const user = await Note.findById(userId);

        return user
    }

}

export default new NoteRepository();