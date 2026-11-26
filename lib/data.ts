import { sql } from '@vercel/postgres';

export interface User {
    id: string;
    name: string;
    email: string;
    passwordHash: string;
}

export async function getUserByEmail(email: string): Promise<User | null> {
    const { rows } = await sql`
        SELECT id, name, email, password_hash FROM users WHERE email = ${email}
    `;
    const row = rows[0];
    if (!row) return null;
    return {
        id: String(row.id),
        name: row.name,
        email: row.email,
        passwordHash: row.password_hash,
    };
}