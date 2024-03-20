'use server'

import { AuthError } from 'next-auth';
import bcrypt from 'bcryptjs';
import { signIn, signOut } from '@/auth.config';
import prisma from '@/lib/prisma';

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        await signIn('credentials', {
            ...Object.fromEntries(formData),
            redirect: false
        });
        return 'Success';
    } catch (error) {
        // if ((error as any).type === 'CredentialsSignin') {
        //     return 'CredentialsSignin';
        // }
        console.log({ error });
        return 'Error desconocido'
    }
}

export const logout = async () => {
    await signOut();
}

export const registerUser = async (name:string, email:string, password:string) => {
    try {
        const newUser = await prisma.user.create({
            data: {
                name: name,
                email: email.toLowerCase(),
                password: bcrypt.hashSync(password)
            },
            select: {
                id: true, name: true, email: true
            }
        });
        return {
            ok: true,
            user: newUser,
            sms: 'Usuario creado'
        }
        
    } catch (error) {
        return {
            ok: false,
            sms: 'No se pudo crear usuario'
        }
    }
}

export const login = async (email: string, password: string) => {
    try {
        await signIn('credentials', { email, password });
        return { ok: true };
    } catch (error) {
        console.log(error);
        return { ok: false, sms: 'No se pudo iniciar sesión' };
    }
}