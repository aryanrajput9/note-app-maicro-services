import { Types } from 'mongoose'

interface UserData {
    _id: Types.ObjectId;
    name: string;
    email: string;
    password?: string;
}

interface SanitizedUser {
    id: Types.ObjectId;
    name: string;
    email: string;
}

const sanitizeResponse = (data: UserData): SanitizedUser => {
    return {
        id: data._id,
        name: data.name,
        email: data.email,
    };
};

export default sanitizeResponse;