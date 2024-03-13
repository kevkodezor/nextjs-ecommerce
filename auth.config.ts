import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';

export const { auth, signIn, signOut } = NextAuth({
    pages: {
        signIn: '/auth/login',
        newUser: '/auth/register'
    },
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);

                if (!parsedCredentials.success) return null;
                const { email, password } = parsedCredentials.data;
                
                return null;
            },
        }),
    ],
});