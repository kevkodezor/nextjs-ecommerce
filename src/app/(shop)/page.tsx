export const revalidate = 60;

import { redirect } from 'next/navigation';
import { ProductList } from '@/list';
import { Pagination, Title } from '@/components';
import { pagination } from '@/actions';

interface Props {
	searchParams: {
		page?: string;
	}
}

export default async function Home({ searchParams }:Props) {

	const page = searchParams.page ? parseInt(searchParams.page) : 1;
	const { products, currentPage, total } = await pagination({ page });

	if (products.length === 0) redirect('/');

	return (
		<>
			<Title title='Tienda' subtitle='Todos los productos' />
			<ProductList products={products} />
			<Pagination totalPages={total} />
		</>
	);
}
