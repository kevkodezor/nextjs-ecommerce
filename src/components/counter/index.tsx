'use client'

import { useState } from 'react';
import { IoAddOutline, IoRemoveOutline } from 'react-icons/io5';

interface Props {
    quantity: number;
}

export const Counter = ({ quantity }:Props) => {

const [count, setCount] = useState(quantity);

const onQuantity = (value:number) => {
    if (count + value < 1) return;
    setCount(count+value); 
}

  return (
    <div className='flex gap-5 items-center'>
        <button
            type='button'
            className='hover:bg-gray-300 rounded-md p-2'
            onClick={() => onQuantity(-1)}
        >
            <IoRemoveOutline size={20} />
        </button>
        <span>{count}</span>
        <button
        type='button'
        className='hover:bg-gray-300 rounded-md p-2'
        onClick={() => onQuantity(+1)}
    >
        <IoAddOutline size={20} />
    </button>
    </div>
  )
}
