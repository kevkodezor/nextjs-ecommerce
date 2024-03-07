'use client'

import Link from 'next/link';
import { redirect, usePathname, useSearchParams } from 'next/navigation';
import clsx from 'clsx';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { generateItemsPagination } from '@/utils';

interface Props {
    totalPages: number;
}

export const Pagination = ({ totalPages }:Props) => {

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const pageString = searchParams.get('page') ?? 1;
    const currentPage = isNaN(+pageString) ? 1 : +pageString;
    if (currentPage <1 || isNaN(+pageString)) redirect('/');

    const pageUrl = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        if (pageNumber === '...') return `${pathname}?${params.toString()}`;
        if (+pageNumber <= 0) return `${pathname}`;
        if (+pageNumber > totalPages) return `${pathname}?${params.toString()}`
        params.set('page', pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    }

    const allPages = generateItemsPagination(currentPage, totalPages);

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
                    {allPages.map((page, index) => (
                        <li key={page} className='page-item'>
                            <Link
                                className={clsx(
                                    'page-link relative block py-1.5 px-3 border-0 outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none',
                                    { 'bg-gray-800 text-white hover:bg-gray-400': page === currentPage }
                                )}
                                href={pageUrl(page)}
                            >
                                {page}
                            </Link>
                        </li>
                    ))}
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
