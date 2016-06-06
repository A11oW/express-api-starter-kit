/* eslint-env node */
import express from 'express';
import cors from 'cors';
import routes from './routes';

const port = 4545;
const app = express();
const router = express.Router(); // eslint-disable-line

app.use(cors());
app.use(routes(router));

app.listen(port, () => {
  console.log(`Express server is up on ${port} port`); //eslint-disable-line
});
