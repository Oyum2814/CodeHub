import React, { EventHandler } from 'react';
import {useRouter} from 'next/router';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import useTutorial from '@/hooks/useTutorial';
import Navbar from '@/components/Navbar';
import SideBar from '@/components/SideBar';
import useLanguage from '@/hooks/useLanguage';
import useCurrentUser from '@/hooks/useCurrentUser';
import YouTube from "react-youtube"; 

// export async function getServerSideProps(context: NextPageContext){
//     const session = await getSession(context);
  
//     if(!session){
//       return {
//         redirect:{
//           destination:'/auth',
//           permanent:false,
//         }
//       }
//     }
  
//     return {
//       props:{}
//     }
//   }

const Watch = ()=>{
    const router = useRouter();
    const {data:user} = useCurrentUser();
    const {tutorialId} = router.query;
    const { data:curr } = useTutorial(tutorialId as string);
    const {data: lang=[]} = useLanguage(curr?.genre);

    const opts = { 
        height: "100%", 
        width: "100%", 
        playerVars: { 
        autoplay: 1, 
    }};

    return (
        <div className="h-auto w-screen bg-white ">
            
            <Navbar loggedIn={user!==null}/>
            <div className="lg:flex pt-20 lg:items-start">
                <div className="px-0 lg:px-2 lg:w-[75%]">

                    <YouTube
                    className=" h-[30vh] md:h-[50vh] xl:h-[70vh] w-full xl:w-[70vw] "
                    videoId={curr?.videoUrl} 
                        opts={opts} /> 

                    {/* <video autoPlay controls controlsList="nodownload" src={curr?.videoUrl} ></video> */}
                    <h1 className=" mt-6 lg:ml-0 lg:mt-0 pt-4 font-bold text-2xl font-poppins md:px-2 lg:px-0 lg:py-2">{curr?.title}</h1>
                    <p className="ml-2 lg:ml-0 lg:mt-0 text-gray-500 font-md font-poppins text-sm lg:pb-2">{curr?.description}</p>
                    <p className="ml-2  lg:ml-0 lg:mt-0 text-gray-800 font-md font-poppins text-sm ">{curr?.duration}</p>
                </div>
                
                <SideBar data={lang}/>
            </div>
        </div>
    )
}

export default Watch;