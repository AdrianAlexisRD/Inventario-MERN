const express = require('express');
const router = express.Router();

const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  obtenerCategorias
} = require('../controllers/productController');

const { 
  liquidarProduct, 
  historialProduct 
} =  require('../controllers/liquidacionController')

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



module.exports = router;