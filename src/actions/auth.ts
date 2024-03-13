'use server'

import { AuthError } from 'next-auth';
import { signIn, signOut } from '@/auth.config';

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
        console.log(error);
        return 'CredentialsSignin'
    }
}

export const logout = async () => {
    await signOut();
}