import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image'
import CarouselSlide from '@/components/CarouselSlide'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import oopsBanner from '@/public/images/oops-banner.jpg';
import scrapingBanner from '@/public/images/scraping-banner.png';
import mlBanner from '@/public/images/ml-banner.png';

const Billboard = ()=>{
    return(
        <div className="bg-white w-[100vw] relative flex items-center justify-center  h-auto md:h-[50vh] px overflow-hidden ">
             <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}

                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <CarouselSlide imgSrc={oopsBanner}
                    title="OOPS" 
                    description="Learn Object Oriented Programming in Python by Prof X having 10+ years of Experience"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CarouselSlide imgSrc={scrapingBanner}
                    title="Web Scraping" 
                    description="Learn about Web Scraping and how to use BeautifulSoup by Professor "
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CarouselSlide imgSrc={mlBanner}
                    title="Machine Learning" 
                    description="Learn about Data Science and Machine Learning Tools and Algorithms"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Billboard;