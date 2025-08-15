import User from "../models/user.js";
import bcrypt from "bcryptjs";

//sistema de autnetificacion con usando JWT para cifra contrasena
export const register = async (req, res) => {
  const { username, email, password, empleado } = req.body;
  try {
    if (password.length < 3 && password == 12345678) {
      return res.status(400).json({ message: "constraseña invalida" });
    }
    //validacion de usuario por email o user, si ya existe el usuario o el correo
    // en nuestra base de datos de retorna error  status 400

    const existeElUsuario = await User.findOne({
      $or: [{ email }, { username }],
    });
    if (existeElUsuario) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }

    const hashedPassword = await bcrypt.hash(password, 12); //ciframos la contrasena
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      empleado,
    });

    res.status(201).json({
      status: "success",
      data: {
        user: {
          id: newUser._id,
          username: newUser.username,
          email: newUser.email,
          empleado: newUser.empleado,
        },
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    res.status(200).json({
      id: user._id,
      username: user.username,
      email: user.email,
      empleado: user.empleado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
