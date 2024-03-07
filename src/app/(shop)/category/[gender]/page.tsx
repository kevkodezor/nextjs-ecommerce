import { redirect } from 'next/navigation';
import { Gender } from '@prisma/client';
import { Pagination, Title } from '@/components';
import { ProductList } from '@/list';
import { pagination } from '@/actions';

interface Props {
    params: { gender: string },
    searchParams: { page?: string }
}

export default async function Category ({ params, searchParams }:Props) { 
    
    const { gender } = params;
    
    const page = searchParams.page ? parseInt(searchParams.page) : 1;
    const { products, currentPage, total } = await pagination({
        page, 
        gender: gender as Gender
    });
    if (products.length === 0) redirect(`/category/${gender}`);

    const labels: Record<string, string> = {
        men: 'Hombres',
        women: 'Mujeres',
        kid: 'Niños',
        unisex: 'Todos'
    }

    return (
        <>
            <Title title={`Articulos para ${labels[gender]}`} subtitle='todos los productos' />
            <ProductList products={products} />
            <Pagination totalPages={total} />
        </>
    );
}