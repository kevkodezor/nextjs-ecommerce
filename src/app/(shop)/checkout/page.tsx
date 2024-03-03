import Link from 'next/link';
import { Title } from '@/components';
import { initialData } from '@/seed';
import Image from 'next/image';

const productsCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
];

export default function Checkout () {
    return (
        <div className='flex justify-center items-center'>
            <div className='flex flex-col w-[1000px] rounded-md p-5'>
                <Title title='Verificar orden' className='font-bold' />
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>

                    <div className='flex flex-col gap-3'>
                        <span className='text-xl'>Productos del carrito</span>
                        <Link href='/cart' className='underline'>Editar carrito</Link>

                        {productsCart?.map(product => (
                            <div key={product.slug} className='flex gap-3'>
                                <Image
                                    src={`/products/${product.images[0]}`}
                                    height={100}
                                    width={150}
                                    alt={product.title}
                                    className='rounded'
                                />
                                <div className='flex flex-col w-full h-full gap-2'>
                                    <p><b>{product.title}</b></p>
                                    <p>$ {product.price}x 5</p>
                                    <p><b>Subtotal:</b> ${product.price * 5}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='bg-white rounded-xl shadow-xl p-5'>

                        <h2 className='text-2xl mb-2 font-bold'>Dirección de entrega</h2>
                        <div className='mb-10'>
                            <p>Susy Torres</p>
                            <p>Av. Madrid</p>
                            <p>Santigo Bernabeu</p>
                            <p>Madrid</p>
                            <p>España</p>
                            <p>14</p>
                            <p>14.14.14.14.14</p>
                        </div>

                        <div className='w-full h-0.5 rounded bg-gray-200 mb-10' />

                        <h2 className='text-xl font-bold'>Detalle de la orden</h2>
                        <div className='grid grid-cols-2'>
                            <span>No. Productos</span>
                            <span className='text-right'>9</span>

                            <span>Subtotal</span>
                            <span className='text-right'>$ 15</span>

                            <span>IVA</span>
                            <span className='text-right'>$ 5</span>

                            <span className='text-2xl mt-5'>Total</span>
                            <span className='text-2xl mt-5 text-right'>$ 20</span>
                        </div>

                        <div className='mt-5'>
                            <Link
                                className='flex btn-primary justify-center'
                                href='/order/1509'
                            >
                                Confirmar orden
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}