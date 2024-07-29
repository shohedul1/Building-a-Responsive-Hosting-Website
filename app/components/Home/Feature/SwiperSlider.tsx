'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-cards";
import { EffectCards } from 'swiper/modules';
import FeatureCard from './FeatureCard';

const SwiperSlider = () => {
    return (
        <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className='w-[280px] h-[380px] md:w-[500px] md:h-[380px] p-8'
        >
            <SwiperSlide className='swiper_slider bg-[#ce1111]'>
                <FeatureCard image='/images/i1.svg' title='Web Hosting' />
            </SwiperSlide>
            <SwiperSlide className='swiper_slider bg-[#030303]'>
                <FeatureCard image='/images/i2.svg' title='Web Hosting' />
            </SwiperSlide>
            <SwiperSlide className='swiper_slider bg-[#56f740]'>
                <FeatureCard image='/images/i3.svg' title='Shared Hosting' />
            </SwiperSlide>
            <SwiperSlide className='swiper_slider bg-[#f5e12f]'>
                <FeatureCard image='/images/i4.png' title='Wordpress Hosting' />
            </SwiperSlide>
            <SwiperSlide className='swiper_slider bg-[#34f8ce]'>
                <FeatureCard image='/images/i5.png' title='Cloud Hosting' />
            </SwiperSlide>
            <SwiperSlide className='swiper_slider bg-[#2b88f3]'>
                <FeatureCard image='/images/i6.png' title='Reseller Hosting' />
            </SwiperSlide>
            <SwiperSlide className='swiper_slider bg-[#a52ff3]'>
                <FeatureCard image='/images/i7.png' title='Email Hosting' />
            </SwiperSlide>
            <SwiperSlide className='swiper_slider bg-[#2cb7ee]'>
                <FeatureCard image='/images/i1.svg' title='Web Hosting' />
            </SwiperSlide>
        </Swiper>

    )
}

export default SwiperSlider