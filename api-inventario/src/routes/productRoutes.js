import express from 'express';
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  obtenerCategorias
} from '../controllers/productController.js';

import {
  liquidarProduct,
  historialProduct
} from '../controllers/liquidacionController.js';

const router = express.Router();

router.route('/')
  .get(getProducts)
  .post(createProduct);

router.route('/categorias')
  .get(obtenerCategorias);

router.route('/:id')
  .patch(updateProduct)
  .delete(deleteProduct);

router.route('/liquidar')
  .post(liquidarProduct)
  .get(historialProduct);

export default router;
