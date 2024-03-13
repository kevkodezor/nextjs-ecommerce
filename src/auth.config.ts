import { z } from 'zod';
import bcrypt from 'bcryptjs';
import NextAuth, { type NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import prisma from './lib/prisma';

export const authConfig: NextAuthConfig = {
    pages: {
        signIn: '/auth/login',
        newUser: '/auth/register'
    },
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(5) })
                    .safeParse(credentials);

                if (!parsedCredentials.success) return null;

                const { email, password } = parsedCredentials.data;
                const user = await prisma.user.findUnique({
                    where: { email: email.toLowerCase() }
                });

                if (!user) return null;
                if (!bcrypt.compareSync(password, user.password)) return null;

                const { password: _, ...rest } = user;
                console.log({ rest });
                
                return rest;
            },
        }),
    ]
};

export const { auth, signIn, signOut } = NextAuth(authConfig);