import React from 'react';
import {useRouter} from 'next/router';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import useTutorial from '@/hooks/useTutorial';
import Navbar from '@/components/Navbar';
import SideBar from '@/components/SideBar';
import useFavourites from "@/hooks/useFavourites";
import useLanguage from '@/hooks/useLanguage';

const Watch = ()=>{
    const router = useRouter();
    const {tutorialId} = router.query;
    const { data:curr } = useTutorial(tutorialId as string);
    const {data: lang=[]} = useLanguage(curr?.genre);
    return (
        <div className="h-auto w-screen bg-white ">
            <Navbar />
            <div className="lg:flex pt-20 lg:items-start">
                <div className="px-0 lg:px-2 lg:w-[75%]">
                    <video autoPlay controls controlsList="nodownload" src={curr?.videoUrl} className=" h-auto w-full xl:w-[75vw] "></video>
                    <h1 className="ml-2 mt-6 lg:ml-0 lg:mt-0 pt-4 font-bold text-2xl font-poppins md:px-2 lg:px-0 lg:py-2">{curr?.title}</h1>
                    <p className="ml-2 lg:ml-0 lg:mt-0 text-gray-500 font-md font-poppins text-sm lg:pb-2">{curr?.description}</p>
                    <p className="ml-2  lg:ml-0 lg:mt-0 text-gray-800 font-md font-poppins text-sm ">{curr?.duration}</p>
                </div>
                
                <SideBar data={lang}/>
            </div>
        </div>
    )
}

export default Watch;