import {getSession} from "next-auth/react";
import { NextPageContext } from "next";
import useCurrentUser from "@/hooks/useCurrentUser";
import Navbar from "@/components/Navbar";
import Billboard from '@/components/Billboard';
import TutorialList from "@/components/TutorialList";
import useTutorialList from "@/hooks/useTutorialList";
import useFavourites from "@/hooks/useFavourites";
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
  return (
    <>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <TutorialList title="Sambhav Tutorials" data={tutorials}/>
      </div>
    </>
  )
}
