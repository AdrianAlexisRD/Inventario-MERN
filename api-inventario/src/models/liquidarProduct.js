const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
  // id_empleado:{
  //   type: Number ,
  //   required: true
  // },
  empleado:{
    type: String ,
    required: true
  },
 liquidado: [{
    name: {
      type: String,
      required: [true, 'El nombre del producto es requerido']
    },
    _id:{
      type:String
    },
    sacarDeStock: {
      type: Number,
      required: [true, 'La cantidad a liquidar es requerida'],
      min: [1, 'La cantidad debe ser al menos 1']
    }
  }],
  nota: {
    type: String,
    maxlength: [500, 'La descripción no puede exceder 500 caracteres']
  },
  // stock: {
  //   type: Number,
  //   required: true,
  //   min: [0, 'El stock no puede ser negativo'],
  //   default: 0
  // },
  createdAt: {
    type: String,
    default: function() {
    const fecha = new Date();
    return `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;
  }
  }
});

module.exports = mongoose.model('liquidacion', ProductSchema);