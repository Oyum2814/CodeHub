import React from 'react';
import {useRouter} from 'next/router';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import useTutorial from '@/hooks/useTutorial';
import Navbar from '@/components/Navbar';
import SideBar from '@/components/SideBar';
const Watch = ()=>{
    const router = useRouter();
    const {tutorialId} = router.query;

    const { data } = useTutorial(tutorialId as string);
    return (
        <div className="h-auto w-screen bg-white ">
            <Navbar />
            <div className="lg:flex pt-20 lg:items-start">
                <div className="md:px-0 px-2 lg:px-2 lg:w-[75%]">
                    <video autoPlay controls controlsList="nodownload" src={data?.videoUrl} className=" h-auto w-full xl:w-[75vw] "></video>
                    <h1 className="pt-4 font-bold text-2xl">{data?.title}</h1>
                    <p className="py-4 font-md text-sm">{data?.description}</p>
                </div>
                
                <SideBar />
            </div>
        </div>
    )
}

export default Watch;