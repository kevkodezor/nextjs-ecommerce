'use client'

import { useState } from 'react';
import { Counter, Selector } from '@/components';
import type { CartProduct, Product, Size } from '@/interfaces';
import { useCartStore } from '@/store';
import clsx from 'clsx';

interface Props {
    product: Product;
}

export const AddToCart = ({ product }: Props) => {

    const onAddProduct = useCartStore(state => state.addProduct);

    const [size, setSize] = useState<Size | undefined>();
    const [quantity, setQuantity] = useState<number>(1)
    const [posted, setPosted] = useState(false);

    const onAdd = () => {
        setPosted(true);
        if (!size) return;

        const productsCart: CartProduct = {
            id: product.id,
            title: product.title,
            slug: product.slug,
            price: product.price,
            inStock: product.inStock,
            image: product.images[0],
            size: size,
            quantity: quantity,
        };

        onAddProduct(productsCart);
        setSize(undefined);
        setQuantity(1);
        setPosted(false);
    };

    return (
        <>
            <Selector
                selectSize={size}
                available={product.sizes}
                onSelectSize={setSize}
            />
            {posted && !size && (
                <p className='text-red-600 font-semibold fade-in'>
                    ¡Por favor, seleccione una talla!
                </p>
            )}
            <Counter
                quantity={quantity}
                onQuantity={setQuantity}
                stock={product.inStock}
            />

            <button
                onClick={onAdd}
                className={clsx(
                    'btn-primary',
                    { 'btn-secondary disabled:pointer-events-none hover: none': quantity === 0 }
                )}
                disabled={quantity === 0}
            >
                Agregar al carrito
            </button>
        </>
    )
}
