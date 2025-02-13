import express from 'express';
import { deleteProducts, getProducts, postProducts } from '../controller/productController.js';

const router = express.Router()


router.route('/')
.get(getProducts)
.post(postProducts)
.delete(deleteProducts)

export default router