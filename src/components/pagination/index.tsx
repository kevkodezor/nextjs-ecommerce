'use client'

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface Props {
    totalPages: number;
}

export const Pagination = ({ totalPages }:Props) => {

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) ?? 1;

    const pageUrl = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        if (pageNumber === '...') return `${pathname}?${params.toString()}`;
        if (+pageNumber <= 0) return `${pathname}`;
        if (+pageNumber > totalPages) return `${pathname}?${params.toString()}`
        params.set('page', pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    }

    return (
        <div className='flex justify-center items-center my-9'>
            <nav aria-label='Page navigation example'>
                <ul className='flex list-style-none gap-2'>
                    <li className='page-item'>
                        <Link
                            className='page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none'
                            href={pageUrl(currentPage-1)}
                        >
                            <IoIosArrowBack size={25} />
                        </Link>
                    </li>
                    <li className='page-item'><a
                        className='page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none'
                        href='#'>1</a></li>
                    <li className='page-item active'><a
                        className='page-link relative block py-1.5 px-3 border-0 bg-phantom-dark outline-none transition-all duration-300 rounded text-white hover:text-white hover:bg-gray-500 shadow-md focus:shadow-md'
                        href='#'>2 <span className='visually-hidden'></span></a></li>
                    <li className='page-item'><a
                        className='page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none'
                        href='#'>3</a></li>
                    <li className='page-item'>
                        <Link
                            className='page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none'
                            href={pageUrl(currentPage+1)}
                        >
                            <IoIosArrowForward size={25} />
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
