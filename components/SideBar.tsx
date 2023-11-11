import SideBarItem from './SideBarItem';
import React from 'react';
import { isEmpty } from 'lodash';
interface SideBarProps{
    data:Record<string,any>[];
}
const SideBar:React.FC<SideBarProps> = ({data})=>{
    if(isEmpty(data)){
        return null;
    }
    return(
        <div className="overflow-y-auto lg:h-[90vh] lg:w-[25%]">
            <h1 className="ml-2 mt-6 text-lg lg:ml-0 lg:mt-0 ">More on <span className="font-bold">{data[0]?.genre}</span></h1>
            {data.map((Tutorial)=>(
                <SideBarItem key={Tutorial.id} data={Tutorial}/>
            ))}
          
        </div>
    )
}

export default SideBar