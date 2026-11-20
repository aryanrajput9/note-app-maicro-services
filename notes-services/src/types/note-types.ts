import { Types } from "mongoose";

export interface INote {
    title: string;
    content: string;

    user: Types.ObjectId;

    isPinned?: boolean;
    isFavorite?: boolean;
    isArchived?: boolean;
    isDeleted?: boolean;

    deletedAt?: Date | null;
}

export interface CreateNoteInput {
    title: string;
    content: string;
    user: Types.ObjectId;

    isPinned?: boolean;
    isFavorite?: boolean;
}