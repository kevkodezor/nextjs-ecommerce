import type { NextAuthConfig } from 'next-auth';

export const authConfig: NextAuthConfig = {
    pages: {
        signIn: '/auth/login',
        // signUp: '/register'
    },
    callbacks: {},
    providers: [],
};