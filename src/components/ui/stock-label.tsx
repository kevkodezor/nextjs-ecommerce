'use client'

import { useEffect, useState } from "react";
import { titleFont } from "@/config/fonts"
import { getStockBySlug } from "@/actions";

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
    }

    return (
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
            Stock: {stock}
        </h1>
    )
}
