import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '@/lib/prismadb';
import serverAuth from "@/lib/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end();
    }

    await serverAuth(req, res);

    const { tutorialId } = req.query;

    if (typeof tutorialId !== 'string') {
      throw new Error('Invalid Id');
    }

    if (!tutorialId) {
      throw new Error('Missing Id');
    }

    const tutorials = await prismadb.tutorial.findUnique({
      where: {
        id: tutorialId
      }
    });

    return res.status(200).json(tutorials);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}