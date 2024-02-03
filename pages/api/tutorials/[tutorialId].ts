import { NextApiRequest,NextApiResponse } from "next";

import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";

export default async function handler(req:NextApiRequest, res:NextApiResponse)
{
    if(req.method!='GET')
    {
        return res.status(405).end();
    }
    try{
        const {tutorialId} = req.query;
        if(typeof tutorialId!='string'){
            throw new Error('Invalid ID');
        }
        if(!tutorialId)
        {
            throw new Error('Invalid ID');
        }

        const tutorial = await prismadb.tutorial.findUnique({
            where:{
                id:tutorialId
            }
        });

        if(!tutorial)
        {
            throw new Error('Invalid ID');
        }

        res.status(200).json(tutorial);
    }catch(error){
        console.log(error);
        res.status(400).end();
    }
}