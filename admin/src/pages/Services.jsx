import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Modal from "../components/Modal";
import ServiceForm from "../components/ServiceForm";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

function Services() {
  const [services, setServices] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [serviceToDelete, setServiceToDelete] = useState(null);

  const BACKEND_URL = import.meta.env.BACKEND_URL || "http://localhost:4000/api";

  const fetchServices = useCallback(async () => { // Make fetchServices async
    try {
      const response = await axios.get(`${BACKEND_URL}/services`);
      setServices(response.data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  }, [BACKEND_URL]);

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  const handleAddService = () => {
    setSelectedService(null);
    setIsModalOpen(true);
  };

  const handleEditService = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleDeleteService = (service) => {
    setServiceToDelete(service);
    setIsDeleteConfirmOpen(true);
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`${BACKEND_URL}/services/${serviceToDelete._id}`);
      fetchServices();
      setIsDeleteConfirmOpen(false);
      setServiceToDelete(null);
    } catch (error) {
      console.error("Error deleting service:", error);
    }
  };

  const handleFormSubmit = async (serviceData) => {
    try {
      if (selectedService) {
        await axios.put(`${BACKEND_URL}/services/${selectedService._id}`, serviceData);
      } else {
        await axios.post(`${BACKEND_URL}/services`, serviceData);
      }
      fetchServices();
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error saving service:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold text-gray-800">Services</h2>
        <button
          onClick={handleAddService}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center"
        >
          <FaPlus className="mr-2" /> Add Service
        </button>
      </div>

      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {services.map((service) => (
              <tr key={service._id}>
                <td className="px-6 py-4 whitespace-nowrap">{service.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">{service.category}</td>
                <td className="px-6 py-4 whitespace-nowrap">Rs.{service.price}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button onClick={() => handleEditService(service)} className="text-indigo-600 hover:text-indigo-900 mr-4">
                    <FaEdit />
                  </button>
                  <button onClick={() => handleDeleteService(service)} className="text-red-600 hover:text-red-900">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ServiceForm
          onSubmit={handleFormSubmit}
          initialData={selectedService}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>

      <Modal isOpen={isDeleteConfirmOpen} onClose={() => setIsDeleteConfirmOpen(false)}>
        <div className="text-center">
          <h3 className="text-lg font-semibold">Confirm Delete</h3>
          <p className="my-4">Are you sure you want to delete the service "{serviceToDelete?.title}"?</p>
          <div className="flex justify-center space-x-4">
            <button onClick={() => setIsDeleteConfirmOpen(false)} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400">
              Cancel
            </button>
            <button onClick={confirmDelete} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Services;
