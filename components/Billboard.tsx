import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import logoPython from '@/public/images/python-asset.png';
import logoJava from '@/public/images/java-asset.png';

const Billboard = ()=>{
    return(
        <div className="bg-white relative flex items-center justify-center h-[50vh] px-2 overflow-hidden ">
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
                    <div className="w-full h-[48vh] text-center flex justify-center items-center">
                        <Image src={logoPython} alt="python" className="h-[50%] w-auto object-cover mr-4 rounded-md"/>
                        <div className="flex flex-col items-start">
                            <h1 className="text-2xl font-bold text-left">Learn Web Scraping</h1>
                            <p className="mt-4 max-w-[80%] text-left">Learn Web Scraping and Automation using Selenium in Python</p>
                            <button className="px-4 py-2 bg-blue-600 font-semibold text-white w-auto mt-2 rounded-md">Learn Now</button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-full h-[48vh] text-center flex justify-center items-center">
                        <Image src={logoJava} alt="python" className="h-[50%] w-auto object-cover mr-4 rounded-md"/>
                        <div className="flex flex-col items-start">
                            <h1 className="text-3xl font-bold">Learn Java</h1>
                            <p className="mt-4 max-w-[80%] text-left">Learn concepts of Objects, classes an functions in Java.</p>
                            <button className="px-4 py-2 bg-blue-600 font-semibold text-white w-auto mt-2 rounded-md">Learn Now</button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-full h-[48vh] text-center flex justify-center items-center">
                        <Image src={logoPython} alt="python" className="h-[50%] w-auto object-cover mr-4 rounded-md"/>
                        <div className="flex flex-col items-start">
                            <h1 className="text-2xl font-bold text-left">Learn Web Scraping</h1>
                            <p className="mt-4 max-w-[80%] text-left">Learn Web Scraping and Automation using Selenium in Python</p>
                            <button className="px-4 py-2 bg-blue-600 font-semibold text-white w-auto mt-2 rounded-md">Learn Now</button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-full h-[48vh] text-center flex justify-center items-center">
                        <Image src={logoPython} alt="python" className="h-[50%] w-auto object-cover mr-4 rounded-md"/>
                        <div className="flex flex-col items-start">
                            <h1 className="text-2xl font-bold text-left">Learn Web Scraping</h1>
                            <p className="mt-4 max-w-[80%] text-left">Learn Web Scraping and Automation using Selenium in Python</p>
                            <button className="px-4 py-2 bg-blue-600 font-semibold text-white w-auto mt-2 rounded-md">Learn Now</button>
                        </div>
                    </div>
                </SwiperSlide>
            
                
            </Swiper>
        </div>
    );
};

export default Billboard;