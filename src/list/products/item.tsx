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
                className='p-4 flex flex-col bg-gray-200 hover:bg-gray-300'
                href={`/product/${product.slug}`}
            >
                <text className='text-md'>{product.title.length < 30 ? product.title : `${product.title.slice(0, 25)}...`}</text>
                <span className='font-bold'>$ {product.price}</span>
            </Link>
        </div>
    )
}