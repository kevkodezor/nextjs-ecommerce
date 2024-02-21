import Link from 'next/link';
import { titleFont } from '@/config/fonts';

export const PageNotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center h-[500px] gap-5'>
            <div className='px-5 mx-5'>
                <h2 className={`${titleFont.className} antialiased text-9xl`}>404</h2>
            </div>
            <button className='rounded-md hover:bg-gray-300 p-2'>
                <Link className='transition-all' href='/'>Go back Home</Link>
            </button>
        </div>
    );
}