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

    const getCategories = await prisma.category.findMany();
    const  cMap = getCategories.reduce((map, category) => {
        map[category.name.toLowerCase()] = category.id;
        return map;
    }, {} as Record<string, string>); // <string = shirt,   string = categoryID>

    console.log('Seed ejecutado');
}

(() => {
    if (process.env.NODE_ENV === 'production') return;
    main();
})();