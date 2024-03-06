import { notFound } from 'next/navigation';
import { Title } from '@/components';
import { initialData } from '@/seed/seed';
import { Category } from '@/interfaces';
import { ProductList } from '@/list';

const products = initialData.products;

interface Props {
    params: { id: Category }
}

export default function Category ({ params}:Props) {
    
    const { id } = params;
    const data = products.filter(product => product.gender === id);
    // if (id !== 'kids' || 'men' || 'women') {
    //     notFound();
    // }

    const labels: Record<Category, string> = {
        men: 'Hombres',
        women: 'Mujeres',
        kid: 'Niños',
        unisex: 'Todos'
    }

    return (
        <>
            <Title title={`Articulos para ${labels[id]}`} subtitle='todos los productos' />
            <ProductList products={data} />
        </>
    );
}