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
            where: { gender: gender },
        });
        // 2. Total pages
        const total = await prisma.product.count({
            where: { gender: gender }
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