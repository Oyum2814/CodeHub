import {getSession} from "next-auth/react";
import { NextPageContext } from "next";
import useCurrentUser from "@/hooks/useCurrentUser";
import Navbar from "@/components/Navbar";
import Billboard from '@/components/Billboard';
import TutorialList from "@/components/TutorialList";
import useTutorialList from "@/hooks/useTutorialList";
import useFavourites from "@/hooks/useFavourites";
import useLanguage from "@/hooks/useLanguage";
export async function getServerSideProps(context: NextPageContext){
  const session = await getSession(context);

  if(!session){
    return {
      redirect:{
        destination:'/auth',
        permanent:false,
      }
    }
  }

  return {
    props:{}
  }
}
export default function Home() {
  const {data:tutorials=[]} = useTutorialList();
  const {data: favourites=[]} = useFavourites();
  const {data:webdev=[]} = useLanguage('Web development')
  const {data:python=[]} = useLanguage('Python')

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

const shuffledTutorial = shuffle(tutorials);
  return (
    <>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <TutorialList title="Tutorials You May Like" data={shuffledTutorial}/>
        {/* <TutorialList title="Your Learning" data={favourites}/> */}
        <TutorialList title="Web Development Tutorials" data={webdev} />
        <TutorialList title="Python Tutorials" data={python} />
      </div>
    </>
  )
}
