'use server'

import prisma from '@/lib/prisma'
import { Gender } from '@prisma/client';

interface Options {
    page?: number;
    take?: number;
    gender?: Gender;
}

export const pagination = async ({ page = 1, take = 12, gender }:Options) => {

    if (isNaN(Number(page))) page = 1;
    if (page < 1) page = 1;

    try {
        // 1. Total products
        const products = await prisma.product.findMany({
            take,
            skip: (page - 1) * take,
            include: {
                ProductImage: {
                    take: 2,
                    select: { url: true }
                }
            },
            where: { gender },
        });
        // 2. Total pages
        const total = await prisma.product.count({
            where: { gender }
        });
        const totalPage = Math.ceil(total/take);

        return {
            currentPage: page,
            total: totalPage,
            products: products.map(product => ({
                ...product,
                images: product.ProductImage.map(img => img.url)
            }))
        }
    } catch (error) {
        throw new Error('No se cargo la imagen')
    }
}

export const getProductBySlug = async (slug:string) => {
    try {
        const productSlug = await prisma.product.findFirst({
            include: {
                ProductImage: {
                    select: { url: true }
                }
            },
            where: { slug }
        });
        
        if (!productSlug) return null;

        return {
            ...productSlug,
            images: productSlug.ProductImage.map(img => img.url)
        }
    } catch (error) {
        console.log(error);
        throw new Error('Error product by slug');
    }
}

export const getStockBySlug = async (slug:string):Promise<number> => {
    try {
        const stock = await prisma.product.findFirst({
            where: { slug },
            select: { inStock: true }
        });
        return stock?.inStock ?? 0;
    } catch (error) {
        return 0;
    }
}