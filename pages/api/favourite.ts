import { NextApiRequest, NextApiResponse } from "next";
import { without } from "lodash";

import prismadb from '@/lib/prismadb';
import serverAuth from "@/lib/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const { currentUser } = await serverAuth(req, res);

      const { tutorialId } = req.body;
      const existingTutorial = await prismadb.tutorial.findUnique({
        where: {
          id: tutorialId,
        }
      });
  
      if (!existingTutorial) {
        throw new Error('Invalid ID');
      }
  
      const user = await prismadb.user.update({
        data: {
          favouriteIds: {
            push: tutorialId
          }
        },
        where: {
            email: currentUser.email || '',
        }
      });
  
      res.status(200).json(user);
    }

    if (req.method === 'DELETE') {
      const { currentUser } = await serverAuth(req, res);

      const { tutorialId } = req.body;

      const existingTutorial = await prismadb.tutorial.findUnique({
        where: {
          id: tutorialId,
        }
      });

      if (!existingTutorial) {
        throw new Error('Invalid ID');
      }

      const updatedFavouriteIds = without(currentUser.favouriteIds, tutorialId);

      const updatedUser = await prismadb.user.update({
        where: {
          email: currentUser.email || '',
        },
        data: {
          favouriteIds: updatedFavouriteIds,
        }
      });

      res.status(200).json(updatedUser);
    }
    
    res.status(405).end();
  } catch (error) {
    console.log(error);

    res.status(500).end();
  }
}