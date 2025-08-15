import liquidacion from "../models/liquidarProduct.js";

export const liquidarProduct = async (req, res) => {
  try {
    const liquidar = new liquidacion(req.body);

    await liquidar.save();
    res.status(200).json(liquidar);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const historialProduct = async (req, res) => {
  try {
    const historialLiquidados = await liquidacion.find();
    res.status(200).json(historialLiquidados);
  } catch (e) {
    console.log(e);
    res.status(400).json({ e: e.message });
  }
};
