import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import Staff from '../models/staffModel.js';

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const staff = await Staff.findOne({ email });

    if (staff && (await bcrypt.compare(password, staff.password))) {
      const token = jwt.sign({ id: staff._id }, 'your_jwt_secret', { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
