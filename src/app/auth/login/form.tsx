'use client';

import Link from 'next/link';
import { useFormState } from 'react-dom';
import { authenticate } from '@/actions';
import { IoInformationCircleOutline } from 'react-icons/io5';

export const LoginForm = () => {

    const [state, dispatch] = useFormState(authenticate, undefined);
    
    return (
        <form action={dispatch} className='flex flex-col'>

            <label htmlFor='email'>Correo electrónico</label>
            <input
                className='px-3 py-2 border bg-gray-200 rounded mb-5'
                type='email'
                name='email' // importante colocar el name a los campos para la autenticación
            />

            <label htmlFor='email'>Contraseña</label>
            <input
                className='px-3 py-2 border bg-gray-200 rounded'
                type='password'
                name='password'
            />
            <div
                className="flex flex-row h-8 items-end space-x-1 justify-center font-light m-2"
                aria-live="polite"
                aria-atomic="true"
            >
                {state && (
                    <>
                        <IoInformationCircleOutline className="h-5 w-5 text-red-500" />
                        <p className="text-sm text-red-500">{state}</p>
                    </>
                )}
            </div>
            <button
                type='submit'
                className='btn-primary'>
                Ingresar
            </button>

            <div className='flex items-center my-5'>
                <div className='flex-1 border-t border-gray-500'></div>
                <div className='px-2 text-gray-800'>O</div>
                <div className='flex-1 border-t border-gray-500'></div>
            </div>

            <Link
                href='/auth/register'
                className='btn-secondary text-center'>
                Crear una nueva cuenta
            </Link>

        </form>
    )
}
