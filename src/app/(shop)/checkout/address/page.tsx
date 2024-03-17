import { Title } from '@/components';
import { AddressForm } from './form';

export default function Address () {
    return (
        <div className='flex flex-col sm:justify-center sm:items-center mb-72'>
            <div className='w-full  xl:w-[1000px] flex flex-col justify-center text-left'>
                <Title title='Dirección' subtitle='Dirección de entrega' />
               <AddressForm />
            </div>
        </div>
    );
}
