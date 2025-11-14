import Staff from '../models/staffModel.js';
import bcrypt from 'bcryptjs';

// Get all staff
export const getStaff = async (req, res) => {
  try {
    const staff = await Staff.find();
    console.log("getStaff staff:", staff);
    res.json(staff);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single staff member
export const getStaffById = async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id);
    if (staff) {
      res.json(staff);
    } else {
      res.status(404).json({ message: 'Staff not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new staff member
export const createStaff = async (req, res) => {
  const { name, contactNumber, email, password } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newStaff = new Staff({
      name,
      contactNumber,
      email,
      password: hashedPassword,
    });

    const savedStaff = await newStaff.save();
    res.status(201).json(savedStaff);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a staff member
export const updateStaff = async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id);

    if (staff) {
      staff.name = req.body.name || staff.name;
      staff.contactNumber = req.body.contactNumber || staff.contactNumber;
      staff.email = req.body.email || staff.email;

      if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        staff.password = await bcrypt.hash(req.body.password, salt);
      }

      const updatedStaff = await staff.save();
      res.json(updatedStaff);
    } else {
      res.status(404).json({ message: 'Staff not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a staff member
export const deleteStaff = async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id);

    if (staff) {
      await staff.remove();
      res.json({ message: 'Staff removed' });
    } else {
      res.status(404).json({ message: 'Staff not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
