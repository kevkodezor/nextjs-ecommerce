import prisma from '../lib/prisma';
import { initialData } from './seed'; 

async function main () {
    await Promise.all([
        prisma.productImage.deleteMany(),
        prisma.product.deleteMany(),
        prisma.category.deleteMany(),
    ]);

    const { categories, products } = initialData;

    const cData = categories.map(category => ({ name: category }));
    await prisma.category.createMany({ data: cData });
    console.log('Seed ejecutado');
}

(() => {
    if (process.env.NODE_ENV === 'production') return;
    main();
})();