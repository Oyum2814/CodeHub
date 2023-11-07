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
  return (
    <>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <TutorialList title="Tutorials You May Like" data={tutorials}/>
        {/* <TutorialList title="Your Learning" data={favourites}/> */}
        <TutorialList title="Web Development Tutorials" data={webdev} />
        <TutorialList title="Python Tutorials" data={python} />
      </div>
    </>
  )
}
