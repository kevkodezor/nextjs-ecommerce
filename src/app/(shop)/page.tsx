import { Title } from '@/components';
import { ProductList } from '@/list';
import { initialData } from '@/seed/seed';
import { pagination } from '@/actions';

const data = initialData.products;

export default async function Home() {
	
	const { products } = await pagination();

	return (
		<>
			<Title title='Tienda' subtitle='Todos los productos' />
			<ProductList products={products} />
		</>
	);
}
