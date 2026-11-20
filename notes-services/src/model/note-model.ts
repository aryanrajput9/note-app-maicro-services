import mongoose, { Schema } from "mongoose";
import type { INote } from "../types/note-types.js";

const noteSchema = new Schema<INote>(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },

        content: {
            type: String,
            default: "",
        },

        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        isPinned: {
            type: Boolean,
            default: false,
        },

        isFavorite: {
            type: Boolean,
            default: false,
        },

        isArchived: {
            type: Boolean,
            default: false,
        },

        isDeleted: {
            type: Boolean,
            default: false,
        },

        deletedAt: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

export const Note = mongoose.model<INote>("Note", noteSchema);