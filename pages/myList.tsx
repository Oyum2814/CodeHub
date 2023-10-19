import {getSession} from "next-auth/react";
import { NextPageContext } from "next";
import Navbar from "@/components/Navbar";
import Billboard from '@/components/Billboard';
import TutorialList from "@/components/TutorialList";
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
export default function myList() {
  const {data: favourites=[]} = useFavourites();
  return (
    <>
      <Navbar />
      <div className="h-[30vh]"></div>
      <div className="pb-40">
        <TutorialList title="Your Favourites" data={favourites}/>
      </div>
    </>
  )
}
