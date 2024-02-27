'use client'

import { useState } from 'react';
import { Swiper as SObject } from 'swiper';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
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
                    '--swiper-navigation-color': 'gray',
                    '--swiper-pagination-color': 'gray',
                } as React.CSSProperties }
                loop={true}
                spaceBetween={10}
                navigation={true}
                autoplay={{ delay: 5000 }}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, Autoplay ]}
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
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {images.map(img => (
                    <SwiperSlide key={img}>
                        <Image
                            className='rounded-md object-fill cursor-pointer'
                            alt={title}
                            src={`/products/${img}`}
                            width={300}
                            height={300}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
