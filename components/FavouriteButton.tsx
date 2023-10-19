import axios from 'axios';
import React,{useCallback, useMemo} from 'react';
import {AiOutlinePlus,AiOutlineCheck} from 'react-icons/ai'
import useCurrentUser from '@/hooks/useCurrentUser';
import useFavourites from '@/hooks/useFavourites';

interface FavouriteButtonProps{
    tutorialId:string,
}

const FavouriteButton:React.FC<FavouriteButtonProps> =({tutorialId})=>{
    const {mutate:mutateFavourites} = useFavourites();
    const {data:currentUser,mutate} = useCurrentUser();

    const isFavourite = useMemo(()=>{
        const list= currentUser?.favouriteIds || [];
        
        return list.includes(tutorialId); 
    },[currentUser,tutorialId]);

    const toggleFavourites = useCallback(async()=>{
        let response;
        if (isFavourite){
            response = await axios.delete('/api/favourite',{data:{tutorialId}});
        }
        else{
            response = await axios.post('/api/favourite',{tutorialId});
        }
        const updatedFavouriteIds = response?.data?.favouriteIds;
        mutate({
            ...currentUser,
            favouriteIds:updatedFavouriteIds
        });
        mutateFavourites();

    },[tutorialId, isFavourite, currentUser, mutate, mutateFavourites]);
    
    const Icon = isFavourite? AiOutlineCheck:AiOutlinePlus
    return(
        <div
        onClick = {toggleFavourites} 
        className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-black border-2 rounded-full flex justify-center items-center transition hover:border-[#ffa31a]">
            <Icon className="text-black" size={25} />
        </div>
    )
}

export default FavouriteButton;