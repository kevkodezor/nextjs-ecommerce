'use client'

import { useEffect, useState } from 'react';
import { titleFont } from '@/config/fonts'
import { getStockBySlug } from '@/actions';
import clsx from 'clsx';

interface Props {
    slug: string;
}

export const StockLabel = ({ slug }:Props) => {

    const [stock, setStock] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        getStock();
    }, []);

    const getStock = async () => {
        const inStock = await getStockBySlug(slug);
        setStock(inStock);
        setLoading(false);
    }

    return (
        <h1 className={clsx(
            `${titleFont.className} antialiased font-bold text-xl`,
            { 'animate-pulse bg-gray-200 rounded-md': loading }
        )}>
            {loading ? (<>&nbsp;</>) : `Stock: ${stock}`}
        </h1>
    )
}
