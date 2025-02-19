import express from 'express';
import { deleteProducts, getProducts, postProducts } from '../controller/productController.js';

const router = express.Router()


router.route('/')
.post(postProducts)
.delete(deleteProducts)

router.get("/",getProducts);
router.get("/:id",getProducts);

export default router