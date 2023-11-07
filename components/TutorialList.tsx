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
    const shuffle = (array: Record<string,any>[]) => { 
        for (let i = array.length - 1; i > 0; i--) { 
          const j = Math.floor(Math.random() * (i + 1)); 
          [array[i], array[j]] = [array[j], array[i]]; 
        } 
        while(array.length>3){
            array.pop();
        }
        
        return array; 
      }; 
    
    const shuffledArray = shuffle(data);
    return (
        <div className="px-4 md:px-12 mt-4 space-y-8">
            <div>
                <p className="text-black text-md md:text-xl lg:text-2xl font-semibold mb-4">
                    {title}
                </p>
                <div className="px-2 grid grid-cols-2 md:grid-cols-4 gap-y-6  w-[100vw]  overflow-x-auto">
                    {data.map((Tutorial)=>(
                        <TutorialCard key={Tutorial.id} data={Tutorial}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TutorialList;