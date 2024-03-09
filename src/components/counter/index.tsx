'use client'

import clsx from 'clsx';
import { IoAddOutline, IoRemoveOutline } from 'react-icons/io5';

interface Props {
    quantity: number;
    stock?: number;
    onQuantity: (value: number) => void;
}

export const Counter = ({ quantity, stock, onQuantity }: Props) => {

    const onSetQuantity = (value: number) => {
        onQuantity(quantity + value);
    }

    return (
        <div className='flex gap-5 items-center'>
            <button
                type='button'
                className={clsx(
                    'hover:bg-gray-300 rounded-md p-2',
                    { 'disabled:bg-gray-50': quantity === 0 }
                )}
                onClick={() => onSetQuantity(-1)}
                disabled={quantity === 0}
            >
                <IoRemoveOutline size={20} />
            </button>
            <span>{quantity}</span>
            <button
                type='button'
                className={clsx(
                    'hover:bg-gray-300 rounded-md p-2',
                    { 'disabled:bg-gray-50': quantity === stock }
                )}
                onClick={() => onSetQuantity(+1)}
                disabled={quantity === stock}
            >
                <IoAddOutline size={20} />
            </button>
        </div>
    )
}
