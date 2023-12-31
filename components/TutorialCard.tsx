import React from "react";
import { useRouter } from 'next/router';
import {BsPlayFill} from 'react-icons/bs';
import FavouriteButton from "./FavouriteButton";

interface TutorialCardProps{
    data:Record<string,any>;
}

const TutorialCard:React.FC<TutorialCardProps> = ({data})=>{
    const router = useRouter();
     return (
        <div className="bg-white shadow-lg w-[40vw]  md:w-[20vw] rounded-lg flex flex-col ">
             <img onClick={()=>{router.push(`/watch/${data?.id}`)}} className="cursor-pointer object-contain -mt-5 sm:mt-0 sm:object-cover transition duration rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-auto" src={data?.thumbnailUrl} alt="" />
             <div className="py-0 md:py-2 px-2 flex flex-col align-center">
               <div className="flex justify-between items-center py-2">
                  <div className="font-semibold text-md cursor-pointer line-clamp-1" onClick={()=>{router.push(`/watch/${data?.id}`)}}>{data?.title}</div>
               </div>
               <div className="flex justify-between">
                  <div>{data?.duration}</div>
                  <FavouriteButton tutorialId={data?.id} /> 
               </div>
          
             </div>
        </div>
        // <div className="group bg-zinc-900 col-span relative h-[12vw]">
        //     <img className="cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw] " 
        //     src={data?.thumbnailUrl} alt="Thumbnail" />
        //     <div className="opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-150 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100">
        //         <img src={data?.thumbnailUrl} alt="Thumbnail" className="cursor-pointer object-cover transition duration shadow-xl rounded-t-m w-full h-[12vw]"/>
        //         <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
        //             <div className="flex flex-row items-center gap-3">
        //                 <div className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300"
        //                 onClick={()=>{router.push(`/watch/${data?.id}`)}}>
        //                     <BsPlayFill size={30}/>
                            
        //                 </div>
        //                 <FavouriteButton tutorialId={data?.id} /> 
        //             </div>
        //             <div className="flex items-center justify-around">
        //                 <p className="text-green-400 font-semibold mt-4">
        //                     New <span className="text-white">2023</span>
        //                 </p>
        //                 <div className="flex flex-row mt-4 gap-2 items-center">
        //                     <p className="text-white text-[10px] lg:text-sm">{data.duration}</p>
        //                 </div>
        //                 <div className="flex flex-row mt-4 gap-2 items-center">
        //                     <p className="text-white text-[10px] lg:text-sm">{data.genre}</p>
        //                 </div>
        //             </div>
                   
        //         </div>
        //     </div>
        // </div>

     )
};

export default TutorialCard;