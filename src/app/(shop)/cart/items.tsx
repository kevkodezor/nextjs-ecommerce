'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Counter } from '@/components';
import { useCartStore } from '@/store'

export const ItemsCart = () => {

    const onUpdateItems = useCartStore(state => state.updateItemsCart);
    const productsCart = useCartStore(state => state.cart);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    if (!loaded) return <p>Cargando carrito...</p>;

    return (
        <>
            {productsCart?.map(product => (
                <div key={`${product.slug}-${product.size}`} className='flex gap-3'>
                    <Image
                        src={`/products/${product.image}`}
                        height={100}
                        width={150}
                        alt={product.title}
                        className='rounded'
                    />
                    <div className='flex flex-col w-full h-full gap-2'>
                        <Link href={`/product/${product.slug}`} className='hover:underline'>
                            <p>{product.title}</p>
                        </Link>
                        <p>$ {product.price} - {product.size} </p>
                        <Counter
                            quantity={product.quantity}
                            onQuantity={(quantity) => onUpdateItems(product, quantity)}
                        />
                        <button className='bg-gray-300 font-bold rounded-md p-1'>Remover</button>
                    </div>
                </div>
            ))}
        </>
    )
}
