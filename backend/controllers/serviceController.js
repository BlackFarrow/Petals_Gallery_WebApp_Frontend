import Service from '../models/serviceModel.js';

// Create a service
export const createService = async (req, res) => {
  console.log("createService req.body:", req.body);
  try {
    const service = new Service(req.body);
    const saved = await service.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all services
export const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    console.log("getAllServices services:", services);
    res.json(services);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single service by ID
export const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ message: 'Service not found' });
    res.json(service);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a service
export const updateService = async (req, res) => {
  console.log("updateService req.body:", req.body);
  try {
    const service = await Service.findById(req.params.id);

    if (service) {
      service.title = req.body.title || service.title;
      service.description = req.body.description || service.description;
      service.price = req.body.price || service.price;
      service.tags = req.body.tags || service.tags;
      service.category = req.body.category || service.category;
      service.imageUrl = req.body.imageUrl || service.imageUrl;
      service.active = req.body.active;

      const updatedService = await service.save();
      res.json(updatedService);
    } else {
      res.status(404).json({ message: "Service not found" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a service
export const deleteService = async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.json({ message: 'Service deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
