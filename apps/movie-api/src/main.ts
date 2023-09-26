import express from 'express';
import * as path from 'path';

const app = express();
const port = process.env.PORT || 3333;
// app.use(cors({ credentials: true }));
// app.use(bodyParser.json());
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to movie-api!' });
});

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
