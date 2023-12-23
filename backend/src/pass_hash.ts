import { hash, compare } from "bcrypt";
const saltRounds = 10;
export async function hashPassword(password: string): Promise<string> {
    const password_hashed = await hash(password, saltRounds);
    return password_hashed;
}

export async function validatePassword(password_hashed: string, password_plaintext: string): Promise<boolean> {
    const result = await compare(password_plaintext, password_hashed);
    return result;
}