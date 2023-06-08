import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

// require routes
import { router as nameRouter } from './routers/nameRoutes.js';

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('connected'))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Routes
app.use('/names', nameRouter);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}/`);
});