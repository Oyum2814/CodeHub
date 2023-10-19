import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '@/lib/prismadb';
import serverAuth from "@/lib/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end();
    }

    await serverAuth(req, res);

    const tutorialsCount = await prismadb.tutorial.count();
    const randomIndex = Math.floor(Math.random() * tutorialsCount);

    const randomTutorials = await prismadb.tutorial.findMany({
      take: 1,
      skip: randomIndex
    });

    return res.status(200).json(randomTutorials[0]);
  } catch (error) {
    console.log(error);

    return res.status(500).end();
  }
}