import { Request, Response } from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

const getAllMovies = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(
      `https://${process.env.API_URL}/3/movie/now_playing?api_key=${process.env.API_KEY}&language=${process.env.LANGUAGE}`
    );

    if (response.status !== 200) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    return res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Something went wrong' });
  }
};

export { getAllMovies };
