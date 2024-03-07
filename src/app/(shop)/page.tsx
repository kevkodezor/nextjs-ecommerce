import { Title } from '@/components';
import { ProductList } from '@/list';
import { pagination } from '@/actions';

interface Props {
	searchParams: {
		page?: string;
	}
}

export default async function Home({ searchParams }:Props) {

	const page = searchParams.page ? parseInt(searchParams.page) : 1;
	const { products } = await pagination({ page });

	return (
		<>
			<Title title='Tienda' subtitle='Todos los productos' />
			<ProductList products={products} />
		</>
	);
}
