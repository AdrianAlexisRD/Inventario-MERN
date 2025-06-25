const Product = require('../models/product');


exports.getProducts = async (req, res) => {
  try {
    const { category, user , name } = req.query;
    console.log(user)
    
    const filtro = {};
    if (category ) filtro.category = category;
    if (user )filtro.user = user ;
    if (name) filtro.name = name ;


    const products = await Product.find(filtro);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.createProduct = async (req, res) => {
  const {name , user} = req.body
  try {
    const product = new Product(req.body);
    const repeatProduct = await Product.findOne({ name ,  user})
    if(repeatProduct){
      return res.status(400).json({ error: 'El producto ya existe para este usuario.' });
    }
    
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;  
    const datosAtualizados = req.body
    console.log(datosAtualizados)
    console.log()
    
    const product = await Product.findByIdAndUpdate( id,
      { $set: datosAtualizados },
      { new: true, runValidators: true }
    );

    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.status(200).json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};