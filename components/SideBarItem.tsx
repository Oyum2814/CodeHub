import React from 'react';
import { useRouter } from 'next/router';
interface SideBarItemProps{
    data:Record<string,any>;
}


const SideBarItem:React.FC<SideBarItemProps> = ({data})=>{
    const router = useRouter();
    return(
        <div onClick={()=>{router.push(`/watch/${data?.id}`)}} className="flex py-3 px-2 h-auto cursor-pointer hover:bg-gray-200">
            <div className="w-[40%] md:w-[20%] lg:w-[40%]">
                <img src={data?.thumbnailUrl} className=""/>
            </div>
            <div  className="w-[60%] px-2 flex flex-col justify-between">
                <h1 className="font-semibold text-md  line-clamp-2 md:line-clamp-3">{data?.title}</h1>
                <p className="">{data?.duration}</p>
            </div>
        </div>
    )
}

export default SideBarItem