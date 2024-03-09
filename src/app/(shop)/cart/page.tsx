import Link from 'next/link';
import { Title } from '@/components';
import { ItemsCart } from './items';
import { Summary } from './summary';


export default function Cart() {
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
                        <Summary />
                    </div>

                </div>
            </div>
        </div>
    );
}