const Liquidar = require('../models/liquidarProduct');

exports.liquidarProduct = async (req, res) => {
  console.log(req.body)
  try {
    const liquidar = new Liquidar(req.body);

    await liquidar.save();
    res.status(201).json(liquidar);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};