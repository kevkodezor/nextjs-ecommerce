import Image from "next/image"
import { Product } from "@/interfaces"
import Link from "next/link";

interface Props {
    product: Product;
}

export const ItemProduct = ({ product }:Props) => {
    return (
        <div className='rounded-md overflow-hidden fade-in'>
            <Image 
                src={`/products/${product.images[0]}`}
                alt={product.title}
                className='w-full object-cover'
                width={500}
                height={500}
            />
            <div className='p-4 flex flex-col bg-indigo-300'>
                <Link href={`/product/${product.slug}`}>
                    {product.title}
                </Link>
                <span className='font-bold'>$ {product.price}</span>
            </div>
        </div>
    )
}