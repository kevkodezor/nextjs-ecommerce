'use server'

import { AuthError } from 'next-auth';
import { signIn } from '../../auth.config';

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        await signIn('credentials', Object.fromEntries(formData));
    } catch (error) {
        return 'credentialsLogin'
        // if (error instanceof AuthError) {
        //     switch (error.type) {
        //         case 'CredentialsSignin':
        //             return 'Invalid credentials.';
        //         default:
        //             return 'Something went wrong.';
        //     }
        // }
        // throw error;
    }
}