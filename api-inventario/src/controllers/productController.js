const Product = require('../models/product');


exports.getProducts = async (req, res) => {
  try {
    const { category , name } = req.query;
    // console.log(req.body)
    
    const filtro = {};
    if (category ) filtro.category = category;
    if (name) filtro.name = {$regex: '^' + name, $options: 'i'} ;
    const products = await Product.find(filtro);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.createProduct = async (req, res) => {
  const {name , empleado} = req.body
  // if(empleado !== 'supervisor'){
  //   return res.status(400).json( 'solo supervisores')
  // }
  try {
    const product = new Product(req.body);
    const repeatProduct = await Product.findOne({ name })
    if(repeatProduct){
      return res.status(400).json( 'El producto ya existe para este usuario.');
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
    const { sacarDeStock } = req.body
    console.log(sacarDeStock)
    console.log(id)
    const nuevoValorStock = await Product.findOne({_id:id})

    console.log(nuevoValorStock.stock)  

    let datosAtualizados = req.body 
    if(sacarDeStock){
     const nuevoValorEnStock = nuevoValorStock.stock - sacarDeStock
    datosAtualizados = {stock: nuevoValorEnStock }
    }  
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