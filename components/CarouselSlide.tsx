import Image from 'next/image'
import React from 'react'
interface CarouselSlideProps{
    imgSrc:any;
    title:string;
    description:string;
}
const CarouselSlide:React.FC<CarouselSlideProps> =({imgSrc,title,description})=>{
    return(
        <div className='w-full h-[48vh] text-center flex justify-center items-center sm:pt-20'>
            <Image sizes='100vw' src={imgSrc} alt="python" className="w-[30%] h-auto object-cover mr-2 rounded-md md:w-[15%]"/>
            <div className="flex flex-col items-start w-[40%] lg:max-w-[20%]">
                <h1 className="line-clamp-2 text-md font-bold font-poppins text-left">{title}</h1>
                <p className="text-sm mt-2 max-w-[90%] text-left font-poppins line-clamp-4">{description}</p>
                <button className="px-4 py-2 bg-blue-600 font-semibold text-white w-auto mt-2 rounded-md">Learn Now</button>
            </div>
        </div>
    )
}

export default CarouselSlide;