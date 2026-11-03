import bcrypt from "bcrypt";

export async function comparePassword(
    inputPassword: string,
    hashedPassword: string
): Promise<boolean> {
    return await bcrypt.compare(inputPassword, hashedPassword);
}