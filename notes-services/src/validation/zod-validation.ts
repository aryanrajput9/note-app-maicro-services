import { z } from "zod";
import mongoose from "mongoose";

export const createNoteSchema = z.object({
    title: z.string()
        .trim()
        .min(1, "Title is required")
        .max(150, "Title cannot exceed 150 characters"),

    content: z.string()
        .max(50000)
        .default(""),

    user: z.string()
        .refine(
            (id) => mongoose.Types.ObjectId.isValid(id),
            "Invalid user ID"
        ),

    isPinned: z.boolean().default(false),

    isFavorite: z.boolean().default(false),

}).strict();