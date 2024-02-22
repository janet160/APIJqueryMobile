
import express from 'express';
import morgan from 'morgan';
import crochetRouter from './routes/crochet.routes.js';
import { config } from 'dotenv';
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

config();

app.use('/', crochetRouter);

export default app;
