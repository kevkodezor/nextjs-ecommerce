'use server'

import prisma from "@/lib/prisma"

export const pagination = async () => {
    try {
        const products = await prisma.product.findMany({
            take: 12,
            include: {
                ProductImage: {
                    take: 2,
                    select: { url: true }
                }
            }
        });
        return {
            currentPage: 1,
            total: 10,
            products: products.map(product => ({
                ...product,
                images: product.ProductImage.map(img => img.url)
            }))
        }
    } catch (error) {
        throw new Error('No se cargo la imagen')
    }
}