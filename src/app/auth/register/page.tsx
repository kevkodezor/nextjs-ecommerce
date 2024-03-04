import { titleFont } from '@/config/fonts';
import Link from 'next/link';

export default function Register() {
  return (
    <div className='flex flex-col'>

      <h1 className={`${titleFont.className} text-4xl mb-5`}>Registro</h1>

      <div className='flex flex-col'>

        <label htmlFor='email'>Nombre completo</label>
        <input
          className='px-3 py-2 border bg-gray-200 rounded mb-5'
          type='text' />

        <label htmlFor='email'>Correo electrónico</label>
        <input
          className='px-3 py-2 border bg-gray-200 rounded mb-5'
          type='email' />


        <label htmlFor='email'>Contraseña</label>
        <input
          className='px-3 py-2 border bg-gray-200 rounded mb-5'
          type='email' />

        <button className='btn-primary'>
          Registrar
        </button>

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

      </div>
    </div>
  );
}
