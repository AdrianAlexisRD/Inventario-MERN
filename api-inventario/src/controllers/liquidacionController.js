const Liquidar = require('../models/liquidarProduct');

exports.liquidarProduct = async (req, res) => {
  console.log(req.body)
  try {
    const liquidar = new Liquidar(req.body);

    await liquidar.save();
    res.status(200).json(liquidar);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.historialProduct = async (req, res) =>{
  console.log(req.body)
  try{
        const historialLiquidados= await Liquidar.find();
        res.status(200).json(historialLiquidados);

  }catch(e){
    console.log(e)
    res.status(400).json({ e: e.message });

  }
}