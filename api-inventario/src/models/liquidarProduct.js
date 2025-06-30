const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
  id_empleado:{
    type: Number ,
    required: true
  },
  empleado:{
    type: String ,
    required: true
  },
  name: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    trim: true,
    maxlength: [100, 'El nombre no puede exceder 100 caracteres']
  },
  proposito: {
    type: String,
    maxlength: [500, 'La descripción no puede exceder 500 caracteres']
  },
  stock: {
    type: Number,
    required: true,
    min: [0, 'El stock no puede ser negativo'],
    default: 0
  },
  createdAt: {
    type: String,
    default: function() {
    const fecha = new Date();
    return `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;
  }
  }
});

module.exports = mongoose.model('liquidacion', ProductSchema);