'use client'

import clsx from 'clsx';
import { useForm } from 'react-hook-form'

type Inputs = {
    name: string;
    lastname: string;
    address: string;
    addressTwo?: string;
    zipcode: string;
    city: string;
    country: string;
    phone: string;
    remember: boolean;
}

export const AddressForm = () => {

    const { register, handleSubmit, formState: { isValid } } = useForm<Inputs>({
        defaultValues: {
            //
        }
    });

    const onSubmit = (data:Inputs) => {
        console.log(data);
        
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-2 sm:gap-5 sm:grid-cols-2'>

            <div className='flex flex-col mb-2'>
                <span>Nombres</span>
                <input
                    type='text'
                    className='p-2 border rounded-md bg-gray-200 border-slate-400'
                    {...register('name', { required: true })}    
                />
            </div>

            <div className='flex flex-col mb-2'>
                <span>Apellidos</span>
                <input
                    type='text'
                    className='p-2 border rounded-md bg-gray-200 border-slate-400'
                    {...register('lastname', { required: true })} 
                />
            </div>

            <div className='flex flex-col mb-2'>
                <span>Dirección</span>
                <input
                    type='text'
                    className='p-2 border rounded-md bg-gray-200 border-slate-400'
                    {...register('address', { required: true })}
                />
            </div>

            <div className='flex flex-col mb-2'>
                <span>Dirección 2 (opcional)</span>
                <input
                    type='text'
                    className='p-2 border rounded-md bg-gray-200 border-slate-400'
                    {...register('addressTwo')} 
                />
            </div>


            <div className='flex flex-col mb-2'>
                <span>Código postal</span>
                <input
                    type='text'
                    className='p-2 border rounded-md bg-gray-200 border-slate-400'
                    {...register('zipcode', { required: true })}
                />
            </div>

            <div className='flex flex-col mb-2'>
                <span>Ciudad</span>
                <input
                    type='text'
                    className='p-2 border rounded-md bg-gray-200 border-slate-400'
                    {...register('city', { required: true })}
                />
            </div>

            <div className='flex flex-col mb-2'>
                <span>País</span>
                <select
                    className='p-2 border rounded-md bg-gray-200 border-slate-400'
                    {...register('country', { required: true })}
                >
                    <option value=''>[Seleccione]</option>
                    <option value='CRI'>Costa Rica</option>
                </select>
            </div>

            <div className='flex flex-col mb-2'>
                <span>Teléfono</span>
                <input
                    type='text'
                    className='p-2 border rounded-md bg-gray-200 border-slate-400'
                    {...register('phone', { required: true })}
                />
            </div>

            <span className='flex items-center' >
                <input type='checkbox' className='mr-2 fade-in' {...register('remember')} /> ¿Recordar dirección?
            </span>

            <button
                type='submit'
                disabled={!isValid}
                className={clsx({
                    'btn-primary': isValid,
                    'btn-disabled bg-gray-400 rounded-md p-2': !isValid
                })}>
                Siguiente
            </button>

        </form>
    )
}
