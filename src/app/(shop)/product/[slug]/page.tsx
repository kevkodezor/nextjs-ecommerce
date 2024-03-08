export const revalidate = 604800;

import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { titleFont } from '@/config/fonts';
import { Slide, StockLabel } from '@/components';
import { getProductBySlug } from '@/actions';
import { AddToCart } from './AddToCart';

interface Props {
    params: { slug: string; }
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const slug = params.slug

    // fetch data
    const product = await getProductBySlug(slug);

    // optionally access and extend (rather than replace) parent metadata
    // const previousImages = (await parent).openGraph?.images || []

    return {
        title: product?.title ?? 'Producto no encontrado',
        description: product?.description ?? '',
        openGraph: {
            title: product?.title ?? 'Producto no encontrado',
            description: product?.description ?? '',
            // images: ['/some-specific-page-image.jpg', ...previousImages],
            images: [`/products/${product?.images[1]}`]
        },
    }
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
                <StockLabel slug={slug} />
                <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>{product?.title}</h1>
                <p className='text-lg'>$ {product?.price}</p>
                <AddToCart product={product} />
                <h3 className='font-bold text-sm'>Descripción</h3>
                <p className='font-light text-justify'>{product?.description}</p>
            </div>

        </div>
    );
}