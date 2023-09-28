import { json } from 'body-parser';
import cors from "cors";
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
import movieRouter from './routes/movie-routes';
const app = express();
const port = process.env.PORT || 3333;
const apiBaseUrl  = `/api/${process.env.VERSION || 'v1'}`;
app.use(cors({ credentials: true }));
app.use(json());

app.use(apiBaseUrl, movieRouter);

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
