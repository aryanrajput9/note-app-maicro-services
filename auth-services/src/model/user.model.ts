import { Schema, model, type InferSchemaType } from 'mongoose';
import bcrypt from 'bcrypt'
import env from '../config/env.js';


const userSchema = Schema.create({

    name: {
        type: String,
        required: [true, "name is required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "emial is required"],
        trim: true,
        unique: true
    },
    passwprd: {
        type: String,
        required: [true, "password is required"],
        trim: true
    }
}, {
    timestamps: true
});

userSchema.pre("save", async function () {
    if (!this.isModified("passwprd")) {
        return
    };

    this.passwprd = await bcrypt.hash(this.passwprd, env.saltRound)
})

type userType = InferSchemaType<typeof userSchema>

const userModel = model<userType>("users", userSchema);
export default userModel