import React from 'react';
import {useRouter} from 'next/router';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import useTutorial from '@/hooks/useTutorial';

const Watch = ()=>{
    const router = useRouter();
    const {tutorialId} = router.query;

    const { data } = useTutorial(tutorialId as string);
    return (
        <div className="h-screen w-screen bg-black ">
            <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
                <AiOutlineArrowLeft className="text-white cursor-pointer" size={40} onClick={()=>{router.push('/')}}/>
                <p className="text-white text-xl md:text-3xl font-bold">
                    <span className="font-light">Watching:</span>
                    {data?.title}
                </p>
            </nav>
            <video autoPlay controls controlsList="nodownload" src={data?.videoUrl} className="h-full w-full "></video>
        </div>
    )
}

export default Watch;