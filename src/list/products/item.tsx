'use client'

import Image from 'next/image'
import Link from 'next/link';
import { Product } from '@/interfaces'
import { useState } from 'react';

interface Props {
    product: Product;
}

export const ItemProduct = ({ product }:Props) => {

    const [displayImg, setDisplayImg] = useState(product.images[0]);

    return (
        <div className='rounded-md overflow-hidden fade-in'>
            <Image 
                src={`/products/${displayImg}`}
                alt={product.title}
                className='w-full object-cover'
                width={500}
                height={500}
                onMouseEnter={() => setDisplayImg(product.images[1])}
                onMouseLeave={() => setDisplayImg(product.images[0])}
            />
            <Link
                className='p-4 flex flex-col bg-indigo-300 hover:bg-indigo-200'
                href={`/product/${product.slug}`}
            >
                {product.title}
                <span className='font-bold'>$ {product.price}</span>
            </Link>
        </div>
    )
}