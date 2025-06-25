const User = require('../models/user');
const bcrypt = require('bcryptjs');


exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    if(password.length<3 && password == 12345678){
      return res.status(400).json({ message: 'constraseña invalida' });
    }
    const existeElUsuario = await User.find({ email , username });
    if (existeElUsuario) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword
    });

    setTokenCookie(res, token); 

    res.status(201).json({
      status: 'success',
      data: {
        user: {
          id: newUser._id,
          username: newUser.username,
          email: newUser.email
        }
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }



    res.status(200).json({
          id: user._id,
          username: user.username,
          email: user.email
        });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};








