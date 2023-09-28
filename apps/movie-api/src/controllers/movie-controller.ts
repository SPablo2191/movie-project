import { Request, Response } from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
import { Status } from '../project/enums/status.enum';
dotenv.config();

const getAllMovies = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(
      `https://${process.env.API_URL}/3/movie/now_playing?api_key=${process.env.API_KEY}&language=${process.env.LANGUAGE}`
    );

    if (response.status !== Status.SUCCESS) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    return res.status(Status.SUCCESS).json(response.data);
  } catch (error) {
    console.error(error);
    return res.status(Status.INTERNAL_SERVER_ERROR).json({ error: 'INTERNAL_SERVER_ERROR' });
  }
};

export { getAllMovies };
