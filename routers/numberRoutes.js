import express from 'express';
const router = express.Router();

import * as numberController from '../controllers/api/numberController.js';

router
  .route('/')
  .get(numberController.getAllNumbers)
  .post(numberController.createNumber);

router
  .route('/:id')
  .get(numberController.getNumberById)
  .patch(numberController.updateNumber)
  .delete(numberController.deleteNumber);

export { router };