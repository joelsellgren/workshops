import express from 'express';
const router = express.Router();

import * as userController from '../controllers/api/userController.js';
import * as authController from '../controllers/api/authController.js'

router.route('/register', authController)

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUserById)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

export { router };