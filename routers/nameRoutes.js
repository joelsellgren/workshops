import express from 'express';
const router = express.Router();

import * as nameController from '../controllers/api/nameController.js';

router
  .route('/')
  .get(nameController.getAllNames)
  .post(nameController.createName);

router
  .route('/:id')
  .get(nameController.getNameById)
  .patch(nameController.updateName)
  .delete(nameController.deleteName);

export { router };