import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import cors from 'cors'
import morgan from 'morgan';
import fs from 'fs'
import path from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// import routes
import { router as nameRouter } from './routers/nameRoutes.js';
import { router as numberRouter } from './routers/numberRoutes.js'
import { router as userRouter } from './routers/userRoutes.js'
import { Stream } from 'stream';

// import middleware
/* import { authMiddleware } from './middlewares/authmiddleware.js'; */

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('connected'))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 8000;

const app = express();


const accessLogPath = path.join(__dirname, 'access.log')
const accessLogStream = fs.createWriteStream(accessLogPath, {
  flags: 'a'
})

app.use(morgan('combined', { stream: accessLogStream }))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Routes
app.use('/api/names', nameRouter);
app.use('/api/numbers', numberRouter)
app.use('/api/users', userRouter)


app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}/`);
});