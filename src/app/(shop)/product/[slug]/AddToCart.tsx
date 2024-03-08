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
    const [quantity, setQuantity] = useState<number>(0)
    const [posted, setPosted] = useState(false);
    
    const onAdd = () => {
        setPosted(true);
        if (!size) return;
    }

    return (
        <>
            <Selector
                selectSize={size}
                available={product.sizes}
                onSelectSize={setSize}
            />
            {posted && !size && (
                <p className='text-red-600 font-semibold fade-in'>
                    ¡Por favor, seleccione una talla
                </p>
            )}
            <Counter
                quantity={quantity}
                onQuantity={setQuantity}
                stock={product.inStock}
            />

            <button onClick={onAdd} className='btn-primary'>
                Agregar al carrito
            </button>
        </>
    )
}
