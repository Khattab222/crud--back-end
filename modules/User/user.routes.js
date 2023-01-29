import { Router } from "express";
import * as userController from './user.controller.js'
const router = Router();

router.get('/', userController.getuser);
router.post('/adduser', userController.adduser);
router.put('/update',userController.updateUser);
router.delete('/delete',userController.deleteUser);
router.get('/search',userController.searchUser);
router.get('/searchbyListId',userController.searchbyListId);
router.post('/login',userController.login)



export default router;
