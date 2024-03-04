import { Product } from '@/interfaces';
import { ItemProduct } from './item';

interface Props {
    products: Product[];
}

export const ProductList = ({ products }:Props) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10'>
            {products.map(product => (
                <ItemProduct key={product.slug} product={product} />
            ))}
        </div>
    );
}