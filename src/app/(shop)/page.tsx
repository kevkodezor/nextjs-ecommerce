import { Title } from '@/components';
import { ProductList } from '@/list';
import { pagination } from '@/actions';
import { redirect } from 'next/navigation';

interface Props {
	searchParams: {
		page?: string;
	}
}

export default async function Home({ searchParams }:Props) {

	const page = searchParams.page ? parseInt(searchParams.page) : 1;
	const { products } = await pagination({ page });

	if (products.length === 0) redirect('/');

	return (
		<>
			<Title title='Tienda' subtitle='Todos los productos' />
			<ProductList products={products} />
		</>
	);
}
