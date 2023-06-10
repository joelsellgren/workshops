import express from 'express';
const router = express.Router();

import * as userController from '../controllers/api/userController.js';
import * as authController from '../controllers/api/authController.js'
import { authMiddleware } from '../middlewares/authmiddleware.js';

router.route('/login').post(authController.loginUser)

router
  .route('/')
  .get(authMiddleware, userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUserById)
  .patch(authMiddleware, userController.updateUser)
  .delete(authMiddleware, userController.deleteUser);

export { router };