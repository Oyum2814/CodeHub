import { NextApiRequest,NextApiResponse } from "next";

import prismadb from '@/lib/prismadb';
import serverAuth from '@/lib/serverAuth';

export default async function handler(req:NextApiRequest, res:NextApiResponse){
   5
    try{
        const {currentUser} = await serverAuth(req,res);
        const favouriteTutorials = await prismadb.tutorial.findMany({
            where:{
                id:{
                    in:currentUser?.favouriteIds,
                }
            }
        });

        return res.status(200).json(favouriteTutorials);
    }catch(error){
        console.log(error);
        return res.status(500).end(); 
    }
}