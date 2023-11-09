import React from 'react';

interface SideBarItemProps{
    label:string;
    route:string;
    thumbnail:string;
    duration:string;
}


const SideBarItem:React.FC<SideBarItemProps> = ({label, route, thumbnail, duration})=>{
    return(
        <div className="flex py-3 px-2 h-auto">
            <div className="w-[40%] md:w-[20%] lg:w-[40%]">
                <img src={thumbnail} className=""/>
            </div>
            <div className="w-[60%] px-2 flex flex-col justify-between">
                <h1 className="font-semibold text-md  line-clamp-2 md:line-clamp-3">{label}</h1>
                <p className="">{duration}</p>
            </div>
        </div>
    )
}

export default SideBarItem