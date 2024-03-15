'use client'

import { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { registerUser } from '@/actions';

type InputsForm = {
    name: string;
    email: string;
    password: string;
}

export const RegisterForm = () => {

    const [errorSms, setErrorSms] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm<InputsForm>();

    const onSubmit: SubmitHandler<InputsForm> = async (data) => {
        const { name, email, password } = data;
        const res = await registerUser(name, email, password);
        if (!res.ok) {
            setErrorSms(res.sms);
            return;
        };

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
           
            <label htmlFor='email'>Nombre completo</label>
            <input
                className={clsx(
                    'px-3 py-2 border bg-gray-200 rounded mb-5',
                    { 'border-red-500': !!errors.name }
                )}
                type='text'
                autoFocus
                {...register('name', { required: true })}
            />
            {/* {errors.name?.type === 'required' && (
                <span className='text-red-500'>* Nombre obligatorio</span>
            )} */}

            <label htmlFor='email'>Correo electrónico</label>
            <input
                className={clsx(
                    'px-3 py-2 border bg-gray-200 rounded mb-5',
                    { 'border-red-500': !!errors.email }
                )}
                type='email'
                {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            />

            <label className='flex items-center' htmlFor='email'>
                Contraseña 
                <IoInformationCircleOutline className='ml-1 text-yellow-600 cursor-pointer' title='Minimo 5 y Maximo 6 caracteres' />
            </label>
            <input
                className={clsx(
                    'px-3 py-2 border bg-gray-200 rounded mb-5',
                    { 'border-red-500': !!errors.password }
                )}
                type='password' 
                {...register('password', { required: true })}
                maxLength={6}
                minLength={5}
            />

            <button name='registrar' className='btn-primary'>
                Registrar
            </button>
            <span className='text-red-500 text-center mt-5'>{errorSms}</span>

            <div className='flex items-center my-5'>
                <div className='flex-1 border-t border-gray-500'></div>
                <div className='px-2 text-gray-800'>O</div>
                <div className='flex-1 border-t border-gray-500'></div>
            </div>

            <Link
                href='/auth/login'
                className='btn-secondary text-center'>
                Volver
            </Link>

        </form>
    )
}
