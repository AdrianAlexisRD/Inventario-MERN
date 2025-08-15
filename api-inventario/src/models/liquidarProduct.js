import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  empleado: {
    type: String,
    required: true,
  },
  liquidado: [
    {
      name: {
        type: String,
        required: [true, "El nombre del producto es requerido"],
      },
      _id: {
        type: String,
      },
      sacarDeStock: {
        type: Number,
        required: [true, "La cantidad a liquidar es requerida"],
        min: [1, "La cantidad debe ser al menos 1"],
      },
    },
  ],
  nota: {
    type: String,
    maxlength: [500, "La descripción no puede exceder 500 caracteres"],
    require: true,
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

const liquidacion = mongoose.model("liquidacion", ProductSchema);
export default liquidacion;
