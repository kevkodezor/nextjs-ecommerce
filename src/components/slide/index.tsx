'use client'

import { useState } from 'react';
import { Swiper as SObject } from 'swiper';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './slide.css';

interface Props {
    images: string[];
    title: string;
    className?: string;
}

export const Slide = ({ images, title, className }: Props) => {

    const [thumbsSwiper, setThumbsSwiper] = useState<SObject>();

    return (
        <div className={className}>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                } as React.CSSProperties }
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                {images.map(img => (
                    <SwiperSlide key={img}>
                        <Image
                            className='rounded-md object-fill'
                            alt={title}
                            src={`/products/${img}`}
                            width={1024}
                            height={800}
                        />
                    </SwiperSlide>
                ))}
                ...
            </Swiper>
        </div>
    )
}
