import { Router } from 'express';
import { getAllMovies } from '../controllers/movie-controller';
import { Endpoints } from '../project/enums/endpoints.enum';
import { operations } from '../project/enums/operation.enum';
const movieRouter = Router();

movieRouter.get(`${Endpoints.movies}${operations.getAll}`, getAllMovies);
export default movieRouter;
