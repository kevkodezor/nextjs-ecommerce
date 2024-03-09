'use client'

import { useEffect, useState } from 'react';
import { useCartStore } from '@/store'
import { currencyFormat } from '@/utils';

export const Summary = () => {

    const { subTotal, tax, total, totalItemsCart } = useCartStore(state => state.getSummaryInfo());
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    if (!loaded) return <p>Cargando...</p>

    return (
        <div className='grid grid-cols-2'>
            <span>No. Productos</span>
            <span className='text-right'>{totalItemsCart}</span>

            <span>Subtotal</span>
            <span className='text-right'>{`${currencyFormat(subTotal)}`}</span>

            <span>IVA</span>
            <span className='text-right'>{`${currencyFormat(tax)}`}</span>

            <span className='text-2xl mt-5'>Total</span>
            <span className='text-2xl mt-5 text-right'>{`${currencyFormat(total)}`}</span>
        </div>
    )
}
