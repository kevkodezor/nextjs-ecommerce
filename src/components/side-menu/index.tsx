'use client'

import Link from 'next/link';
import clsx from 'clsx';
import {
    IoCloseOutline, IoLogInOutline, IoLogOutOutline, 
    IoPeopleCircle, IoPersonOutline, IoSearchOutline, 
    IoShirtOutline, IoTicketOutline
} from 'react-icons/io5';
import { useUiStore } from '@/store';
import { logout } from '@/actions';

export const SideMenu = () => {

    const isMenu = useUiStore(state => state.openMenu);
    const menuClose = useUiStore(state => state.isClose);

    return (
        <>
            {isMenu && (
                <>
                    <div className='fixed top-0 w-screen h-screen z-10 bg-black opacity-30' />
                    <div className='fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm' />
                </>
            )}

            <nav className={
                clsx('fixed p-5 right-0 top-0 sm:w-full lg:w-[30%] h-screen bg-white z-30 shadow-2xl transform transition-all duration-300', {
                    'translate-x-full' : !isMenu
                })
            }>
                <IoCloseOutline
                    size={30}
                    className='absolute top-5 right-5 cursor-pointer'
                    onClick={menuClose}
                />
                <div className='relative top-9'>
                    <IoSearchOutline size={20} className='absolute top-2 left-2' />
                    <input
                        type='text'
                        placeholder='Buscar'
                        className='w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500'
                    />
                </div>

                <Link href='/profile' onClick={menuClose} className='flex items-center mt-12 p-2 hover:bg-gray-100 rounded transition-all'>
                    <IoPersonOutline size={20} />
                    <span className='ml-3 text-lg'>Perfil</span>
                </Link>
                <Link href='/' className='flex items-center mt-2 p-2 hover:bg-gray-100 rounded transition-all'>
                    <IoTicketOutline size={20} />
                    <span className='ml-3 text-lg'>Ordenes</span>
                </Link>
                <Link href='/' className='flex items-center mt-2 p-2 hover:bg-gray-100 rounded transition-all'>
                    <IoLogInOutline size={20} />
                    <span className='ml-3 text-lg'>Ingresar</span>
                </Link>
                <Link
                    href='/'
                    onClick={() => {
                        logout();
                        menuClose();
                    }} 
                    className='flex items-center mt-2 p-2 hover:bg-gray-100 rounded transition-all'
                >
                    <IoLogOutOutline size={20} />
                    <span className='ml-3 text-lg'>Cerrar sesión</span>
                </Link>

                <div className='w-full h-px bg-gray-200 my-10' />

                <Link href='/' className='flex items-center mt-2 p-2 hover:bg-gray-100 rounded transition-all'>
                    <IoShirtOutline size={20} />
                    <span className='ml-3 text-lg'>Productos</span>
                </Link>
                <Link href='/' className='flex items-center mt-2 p-2 hover:bg-gray-100 rounded transition-all'>
                    <IoTicketOutline size={20} />
                    <span className='ml-3 text-lg'>Ordenes</span>
                </Link>
                <Link href='/' className='flex items-center mt-2 p-2 hover:bg-gray-100 rounded transition-all'>
                    <IoPeopleCircle size={20} />
                    <span className='ml-3 text-lg'>Usuarios</span>
                </Link>

            </nav>
        </>
    )
} 