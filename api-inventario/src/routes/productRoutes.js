const express = require('express');
const router = express.Router();

const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');
const { liquidarProduct , historialProduct } =  require('../controllers/liquidacionController')

router.route('/').get(getProducts)
router.route('/').post(createProduct);
router.route('/:id').patch(updateProduct)
router.route('/:id').delete(deleteProduct);
router.route('/liquidar').post(liquidarProduct)
router.route('/liquidar').get(historialProduct)



module.exports = router;