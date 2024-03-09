'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5'
import { titleFont } from '@/config/fonts'
import { useCartStore, useUiStore } from '@/store';

export const TopMenu = () => {

    const menuOpen = useUiStore(state => state.isOpen);
    const geTotalItems = useCartStore(state => state.getItemsCart());

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <nav className='sticky top-0 flex px-5 justify-between items-center w-full p-2 z-10 bg-phantom-dark text-white'>

            <div>
                <Link href='/'>
                    <span className={`${titleFont.className} antialiased font-bold`}>
                        Teslo
                    </span>
                    <span> | Shop</span>
                </Link>
            </div>

            <div className='hidden sm:block'>
                <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-500' href='/category/men'>
                    Hombres
                </Link>
                <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-500' href='/category/women'>
                    Mujeres
                </Link>
                <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-500' href='/category/kid'>
                    Niños
                </Link>
            </div>

            <div className='flex items-center'>
                <Link href='/search' className='mx-2'>
                    <IoSearchOutline className='w-5 h-5' />
                </Link>
                <Link href='/cart' className='mx-2'>
                    <div className='relative'>
                        {loaded && geTotalItems > 0 && (
                            <span className='fade-in absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-300 text-white'>
                                {geTotalItems}
                            </span>
                        )}
                        <IoCartOutline className='w-5 h-5' />
                    </div>
                </Link>
                <button
                    className='m-2 p-2 rounded-md transition-all hover:bg-gray-500'
                    onClick={menuOpen}
                >
                    Menu
                </button>
            </div>

        </nav>
    )
}
