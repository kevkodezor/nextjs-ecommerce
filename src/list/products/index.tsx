import { Product } from '@/interfaces';
import { ItemProduct } from './item';

interface Props {
    products: Product[];
}

export const ProductList = ({ products }:Props) => {
    return (
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-10'>
            {products.map(product => (
                <ItemProduct key={product.slug} product={product} />
            ))}
        </div>
    );
}