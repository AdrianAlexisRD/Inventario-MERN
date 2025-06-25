const express = require('express');
const router = express.Router();

const {
  getProducts,
  // getProduct,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');


router.route('/').get(getProducts)
router.route('/').post(createProduct);
  // .patch(getProduct)
router.route('/:id').patch(updateProduct)
router.route('/:id').delete(deleteProduct);

module.exports = router;