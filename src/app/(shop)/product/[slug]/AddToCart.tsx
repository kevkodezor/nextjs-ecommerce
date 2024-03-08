'use client'

import { useState } from 'react';
import { Counter, Selector } from '@/components';
import { Product } from '@/interfaces';
import { Size } from '@prisma/client';

interface Props {
    product: Product;
}

export const AddToCart = ({ product }:Props) => {

    const [size, setSize] = useState<Size | undefined>();

    return (
        <>
            <Selector
                selectSize={size}
                available={product.sizes}
                onSelectSize={setSize}
            />
            <Counter quantity={5} />

            <button className='btn-primary'>
                Agregar al carrito
            </button>
        </>
    )
}
