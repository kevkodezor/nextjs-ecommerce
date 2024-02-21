import React from 'react'
import Link from 'next/link'
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5'
import { titleFont } from '@/config/fonts'

export const TopMenu = () => {
    return (
        <nav className='flex px-5 justify-between items-center w-full p-2'>

            <div>
                <Link href='/'>
                    <span className={`${titleFont.className} antialiased font-bold`}>
                        Teslo
                    </span>
                    <span> | Shop</span>
                </Link>
            </div>

            <div className='hidden sm:block'>
                <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' href='/category/men'>
                    Men
                </Link>
                <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' href='/category/women'>
                    women
                </Link>
                <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' href='/category/kids'>
                    kids
                </Link>
            </div>

            <div className='flex items-center'>
                <Link href='/search' className='mx-2'>
                    <IoSearchOutline className='w-5 h-5' />
                </Link>
                <Link href='/search' className='mx-2'>
                    <div className='relative'>
                        <span className='absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-300 text-white'>15</span>
                        <IoCartOutline className='w-5 h-5' />
                    </div>
                </Link>
                <button
                    className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'
                >
                    Menu
                </button>
            </div>

        </nav>
    )
}
