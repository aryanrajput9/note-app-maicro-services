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
    password: {
        type: String,
        required: [true, "password is required"],
        trim: true
    }
}, {
    timestamps: true
});

userSchema.pre("save", async function () {
    if (!this.isModified("password")) {
        return
    };

    this.password = await bcrypt.hash(this.password, env.saltRound)
})

type userType = InferSchemaType<typeof userSchema>

const userModel = model<userType>("users", userSchema);
export default userModel