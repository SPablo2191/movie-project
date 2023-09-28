import { Router } from 'express';
import { getAllMovies } from '../controllers/movie-controller';
const movieRouter = Router();

movieRouter.get('/', getAllMovies);
export default movieRouter;
