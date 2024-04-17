'use server';

import { SignJWT, jwtVerify } from 'jose';

const key = process.env.NEXT_ENCRYPTION_KEY;
const encodedKey = new TextEncoder().encode(key);

export async function encrypt(payload: any) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('10 sec from now')
        .sign(encodedKey);
}

export async function decrypt(input: string): Promise<any> {
    const { payload } = await jwtVerify(input, encodedKey, {
        algorithms: ['HS256']
    });

    return payload;
}
