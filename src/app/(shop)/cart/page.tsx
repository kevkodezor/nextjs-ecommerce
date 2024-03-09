import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Title } from '@/components';
import { ItemsCart } from './items';


export default function Cart () {

    // redirect('/empty');

    return (
        <div className='flex justify-center items-center'>
            <div className='flex flex-col w-[1000px] rounded-md p-5'>
                <Title title='Carrito' className='font-bold' />
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>

                    <div className='flex flex-col gap-3'>
                        <span className='text-xl'>Agregar más productos</span>
                        <Link href='/' className='underline'>Seguir comprando</Link>

                        <ItemsCart />
                    </div>

                    <div className='bg-white rounded-xl shadow-xl p-5 h-fit'>
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
                                href='/checkout/address'>
                                    Check
                                </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div> 
    );
}