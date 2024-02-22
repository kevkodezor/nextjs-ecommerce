import { Title } from '@/components';
import { ProductList } from '@/list';
import { initialData } from '@/seed';

const data = initialData.products;

export default function Home() {
  return (
    <>
      <Title title='Tienda' subtitle='Todos los productos' />
      <ProductList products={data} />
    </>
  );
}
