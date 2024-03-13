import prisma from '../lib/prisma';
import { initialData } from './seed'; 

async function main () {
    // await Promise.all([
        await prisma.user.deleteMany();
        await prisma.productImage.deleteMany();
        await prisma.product.deleteMany();
        await prisma.category.deleteMany();
    // ]);

    const { categories, products, users } = initialData;

    await prisma.user.createMany({ data: users });

    const cData = categories.map(category => ({ name: category }));
    await prisma.category.createMany({ data: cData });

    const getCategories = await prisma.category.findMany();
    const  cMap = getCategories.reduce((map, category) => {
        map[category.name.toLowerCase()] = category.id;
        return map;
    }, {} as Record<string, string>); // <string = shirt,   string = categoryID>

    // Productos
    products.forEach(async (product) => {
        const { type, images, ...rest } = product;
        const dataProduct = await prisma.product.create({
            data: {
                ...rest,
                categoryId: cMap[type]
            },
        });
        // Images
        const imgData = images.map(img => ({
            url: img,
            productId: dataProduct.id
        }));
        await prisma.productImage.createMany({ data: imgData });
    });

    console.log('Seed ejecutado');
}

(() => {
    if (process.env.NODE_ENV === 'production') return;
    main();
})();