import Product from "../models/product.js";

export async function getProducts(req, res) {
  const { category, name } = req.query;
  const filtro = {};

  try {
    if (category) filtro.category = category;
    if (name) filtro.name = { $regex: "^" + name, $options: "i" };

    const products = await Product.find(filtro);
    if (products.length === 0) {
      return res.status(404).json({ message: "No se encontraron productos" });
    }
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function createProduct(req, res) {
  try {
    const product = new Product(req.body);

    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export async function updateProduct(req, res) {
  try {
    const { id } = req.params;
    const { sacarDeStock } = req.body;
    const nuevoValorStock = await Product.findOne({ _id: id });

    let datosAtualizados = req.body;
    if (sacarDeStock) {
      const nuevoValorEnStock = nuevoValorStock.stock - sacarDeStock;
      datosAtualizados = { stock: nuevoValorEnStock };
    }
    const product = await Product.findByIdAndUpdate(
      id,
      { $set: datosAtualizados },
      { new: true , runValidators: true }
    );

    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export async function deleteProduct(req, res) {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.status(200).json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export async function obtenerCategorias(req, res) {
  try {
    const categories = await Product.distinct("category");
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
