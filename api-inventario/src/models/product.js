import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    unique: [true, "Nombre de producto repetido"],
    required: [true, "El nombre es obligatorio"],
    trim: true,
    maxlength: [100, "El nombre no puede exceder 100 caracteres"],
  },
  price: {
    type: Number,
    required: [true, "El precio es obligatorio"],
    min: [0, "El precio no puede ser negativo"],
  },
  description: {
    type: String,
    maxlength: [500, "La descripción no puede exceder 500 caracteres"],
  },
  category: {
    type: String,
    required: true,
    // enum: ['Electronica', 'Hogar', 'Ropa', 'Alimentos', 'Otros']
  },
  stock: {
    type: Number,
    required: true,
    min: [0, "El stock no puede ser negativo"],
    default: 0,
  },
  createdAt: {
    type: String,
    default: function () {
      const fecha = new Date();
      return `${fecha.getDate()}/${
        fecha.getMonth() + 1
      }/${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;
    },
  },
});

const Product = mongoose.model("Product", ProductSchema);
export default Product;
