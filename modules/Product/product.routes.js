import { Router } from "express";
import * as productController from './product.controller.js'
const router = Router()

router.get('/', productController.getAll);
router.post('/add',productController.addProduct);
router.put('/update/:id/:UserId',productController.updateProduct);
router.delete('/delete/:prodId/:UserId',productController.deleteProduct);
router.get('/searchpro',productController.searchProducts);
router.get('/prodwithowner',productController.getAllWithOwner);
router.get('/search',productController.searchByName)



export default router;