export const revalidate = 604800;

import { notFound } from 'next/navigation';
import { titleFont } from '@/config/fonts';
import { Counter, Selector, Slide } from '@/components';
import { getProductBySlug } from '@/actions';

interface Props {
    params: { slug: string; }
}

export default async function ProductBySlug ({ params }: Props) {

    const { slug } = params;
    const product = await getProductBySlug(slug);

    if (!product) notFound();

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 lg:px-5'>

            <div className='col-span-1 md:col-span-2'>
               <Slide title={product.title} images={product.images} />
            </div>

            <div className='col-span-1 flex flex-col gap-3'>
                <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>{product?.title}</h1>
                <p className='text-lg'>$ {product?.price}</p>

                <Selector selectSize={product.sizes[0]} available={product.sizes} />
                <Counter quantity={5} />

                <button className='btn-primary'>
                    Agregar al carrito
                </button>
                <h3 className='font-bold text-sm'>Descripción</h3>
                <p className='font-light text-justify'>{product?.description}</p>
            </div>

        </div>
    );
}