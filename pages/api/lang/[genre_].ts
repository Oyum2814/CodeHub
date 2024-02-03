import { NextApiRequest,NextApiResponse } from "next";

import prismadb from '@/lib/prismadb';
import serverAuth from '@/lib/serverAuth';

export default async function handler(req:NextApiRequest, res:NextApiResponse){
    
    if(req.method !='GET'){
        return res.status(405).end();
    }
    try{
        const { genre_ } = req.query;
        if(typeof genre_!='string'){
            throw new Error('Invalid Genre');
        }
        if(!genre_)
        {
            throw new Error('Invalid Genre');
        }

        const langTutorials = await prismadb.tutorial.findMany({
            where:{
                genre:genre_,
            }
        });
        console.log(langTutorials);
        return res.status(200).json(langTutorials);
    }catch(error){
        console.log(error);
        return res.status(500).end(); 
    }
}