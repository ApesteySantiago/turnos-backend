import User from '../models/User.js';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Registro
export const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificacion de campos completos
    if(!email || !password) {
      return res.status(400).json({ message: "Se requiere email y contraseña." });
    }

    // Verifico si existe el usuario

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(409).json({ message: "El email ya existe."});
    }

    // Encripto llamando bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear eñ usuario
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "Usuario registrado exitosamente." });
  } catch(error){
    console.error("Error in register", error);
    res.status(500).json({ message: "Internal server error." });
  };
};

// Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Busco el usuario
    const user = await user.findOne({ email });
    if(!user) {
      return res.status(404).json({ message: "Usuario no encontrado." });
    }

    // Comparo contraseñas

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid){
      return res.status(401).json({ message: "Credenciales invalidas." });
    }

    const token2 = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({ token });

  } catch (error) {
    console.error("Error al loguearse:", error);
    res.status(500).json({ message: "Internal server error." });    
  }
};