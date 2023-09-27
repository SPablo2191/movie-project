import { json } from 'body-parser';
import { cors } from 'cors';
import express from 'express';
import 'dotenv/config';
import movieRouter from './routes/movie-routes';
const app = express();
const port = process.env.PORT || 3333;
const apiBaseUrl : string = `/api/${process.env.VERSION || 'v1'}`;
app.use(cors({ credentials: true }));
app.use(json());

app.get(apiBaseUrl, movieRouter);

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
