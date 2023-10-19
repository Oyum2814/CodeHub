import React from "react";
import TutorialCard from "./TutorialCard";
import { isEmpty } from 'lodash';

interface TutorialListProps{
    data:Record<string,any>[];
    title:string;
}

const TutorialList:React.FC<TutorialListProps>= ({data,title})=>{
    if(isEmpty(data)){
        return null;
    }
    return (
        <div className="px-4 md:px-12 mt-4 space-y-8">
            <div>
                <p className="text-black text-md md:text-xl lg:text-2xl font-semibold mb-4">
                    {title}
                </p>
                <div className="grid grid-cols-4 gap-2">
                    {data.map((Tutorial)=>(
                        <TutorialCard key={Tutorial.id} data={Tutorial}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TutorialList;