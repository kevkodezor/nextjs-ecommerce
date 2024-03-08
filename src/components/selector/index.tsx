import { Size } from '@/interfaces';
import clsx from 'clsx';

interface Props {
    selectSize?: Size;
    available: Size[];
    onSelectSize: (size:Size) => void;
}

export const Selector = ({ selectSize, available, onSelectSize }:Props) => {
    
    return (
        <>
            <h3 className='font-bold'>Tallas disponibles</h3>
            <div className='flex gap-x-2'>
                {available.map(size => (
                    <button
                        key={size}
                        onClick={() => onSelectSize(size)}
                        className={clsx( 'p-2 w-12 rounded-md transition-all hover:bg-gray-300',
                        { 'bg-gray-300': size === selectSize }
                    )}>
                        {size}
                    </button>    
                )
                )}
            </div>
        </>
    );
}