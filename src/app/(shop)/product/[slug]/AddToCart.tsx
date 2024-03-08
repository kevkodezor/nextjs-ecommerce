'use client'

import { useState } from 'react';
import { Counter, Selector } from '@/components';
import type { CartProduct, Product, Size } from '@/interfaces';
import { useCartStore } from '@/store';

interface Props {
    product: Product;
}

export const AddToCart = ({ product }: Props) => {

    const onAddProduct = useCartStore(state => state.addProduct);

    const [size, setSize] = useState<Size | undefined>();
    const [quantity, setQuantity] = useState<number>(0)
    const [posted, setPosted] = useState(false);

    const onAdd = () => {
        setPosted(true);
        if (!size) return;

        const productsCart: CartProduct = {
            id: product.id,
            title: product.title,
            slug: product.slug,
            price: product.price,
            image: product.images[0],
            size: size,
            quantity: quantity,
        };

        onAddProduct(productsCart);
        setSize(undefined);
        setQuantity(0);
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
