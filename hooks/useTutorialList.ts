import useSWR from 'swr'
import fetcher from '@/lib/fetcher'

const useTutorialLists= ()=>{
    const {data, error, isLoading } = useSWR('/api/tutorials',fetcher,{
        revalidateIfStale:false,
        revalidateOnFocus:false,
        revalidateOnReconnect:false,
    });

    return {data, error, isLoading };
};

export default useTutorialLists;