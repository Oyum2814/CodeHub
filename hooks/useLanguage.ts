import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useLanguage = (genre?:string)=>{
    const {data, error, isLoading, mutate} = useSWR(genre?`/api/lang/${genre}`:null,fetcher,{
        revalidateIfStale:false,
        revalidateOnFocus:false,
        revalidateOnReconnect:false,
    }); 
    return {data, error, isLoading, mutate};
};

export default useLanguage;