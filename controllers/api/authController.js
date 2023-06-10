import User from "../../models/user-model.js";
import bcrypt from 'bcrypt'

import jwt from 'jsonwebtoken'

export const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await User.findOne({ email }).select("+password");
  
      if (!user) {
        res.status(401).send("Invalid email or password");
        return;
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        res.status(401).send("Invalid email or password");
        return;
      }

      const payload = {
        id: user._id,
        role: "ADMIN",
        name: user.name
    };
  
      const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);
      res.status(200).json({ token });
  
    } catch (err) {
      res.status(500).send(err.message);
    }
  };