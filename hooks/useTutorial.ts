import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useTutorial = (id?:string)=>{
    const {data, error, isLoading } = useSWR(id ? `/api/tutorials/${id}`: null,fetcher,{
        revalidateIfStale:false,
        revalidateOnFocus:false,
        revalidateOnReconnect:false
    });
    console.log(data);
    return {data, error, isLoading};
}
export default useTutorial;