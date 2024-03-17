
import Link from 'next/link'

export const AddressForm = () => {
    return (
        <div className='grid grid-cols-1 gap-2 sm:gap-5 sm:grid-cols-2'>

            <div className='flex flex-col mb-2'>
                <span>Nombres</span>
                <input
                    type='text'
                    className='p-2 border rounded-md bg-gray-200 border-slate-400'
                />
            </div>

            <div className='flex flex-col mb-2'>
                <span>Apellidos</span>
                <input
                    type='text'
                    className='p-2 border rounded-md bg-gray-200 border-slate-400'
                />
            </div>

            <div className='flex flex-col mb-2'>
                <span>Dirección</span>
                <input
                    type='text'
                    className='p-2 border rounded-md bg-gray-200 border-slate-400'
                />
            </div>

            <div className='flex flex-col mb-2'>
                <span>Dirección 2 (opcional)</span>
                <input
                    type='text'
                    className='p-2 border rounded-md bg-gray-200 border-slate-400'
                />
            </div>


            <div className='flex flex-col mb-2'>
                <span>Código postal</span>
                <input
                    type='text'
                    className='p-2 border rounded-md bg-gray-200 border-slate-400'
                />
            </div>

            <div className='flex flex-col mb-2'>
                <span>Ciudad</span>
                <input
                    type='text'
                    className='p-2 border rounded-md bg-gray-200 border-slate-400'
                />
            </div>

            <div className='flex flex-col mb-2'>
                <span>País</span>
                <select
                    className='p-2 border rounded-md bg-gray-200 border-slate-400'
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
                />
            </div>

            <span className='flex items-center'>
                <input type='checkbox' className='mr-2 fade-in' /> ¿Recordar dirección?
            </span>

            <Link
                href='/checkout'
                className='btn-primary flex w-full justify-center '>
                Siguiente
            </Link>

        </div>
    )
}
