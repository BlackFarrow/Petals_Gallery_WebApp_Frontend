import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../components/Modal";
import StaffForm from "../components/StaffForm";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

function Staff() {
  const [staff, setStaff] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [staffToDelete, setStaffToDelete] = useState(null);

  const BACKEND_URL = import.meta.env.BACKEND_URL || "http://localhost:4000/api";

  useEffect(() => {
    fetchStaff();
  }, []);

  const fetchStaff = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/staff`);
      setStaff(response.data);
    } catch (error) {
      console.error("Error fetching staff:", error);
    }
  };

  const handleAddStaff = () => {
    setSelectedStaff(null);
    setIsModalOpen(true);
  };

  const handleEditStaff = (staff) => {
    setSelectedStaff(staff);
    setIsModalOpen(true);
  };

  const handleDeleteStaff = (staff) => {
    setStaffToDelete(staff);
    setIsDeleteConfirmOpen(true);
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`${BACKEND_URL}/staff/${staffToDelete._id}`);
      fetchStaff();
      setIsDeleteConfirmOpen(false);
      setStaffToDelete(null);
    } catch (error) {
      console.error("Error deleting staff:", error);
    }
  };

  const handleFormSubmit = async (staffData) => {
    try {
      if (selectedStaff) {
        await axios.put(`${BACKEND_URL}/staff/${selectedStaff._id}`, staffData);
      } else {
        await axios.post(`${BACKEND_URL}/staff`, staffData);
      }
      fetchStaff();
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error saving staff:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold text-gray-800">Staff Management</h2>
        <button
          onClick={handleAddStaff}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center"
        >
          <FaPlus className="mr-2" /> Add Staff
        </button>
      </div>

      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Number</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {staff.map((person) => (
              <tr key={person._id}>
                <td className="px-6 py-4 whitespace-nowrap">{person.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{person.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{person.contactNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button onClick={() => handleEditStaff(person)} className="text-indigo-600 hover:text-indigo-900 mr-4">
                    <FaEdit />
                  </button>
                  <button onClick={() => handleDeleteStaff(person)} className="text-red-600 hover:text-red-900">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <StaffForm
          onSubmit={handleFormSubmit}
          initialData={selectedStaff}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>

      <Modal isOpen={isDeleteConfirmOpen} onClose={() => setIsDeleteConfirmOpen(false)}>
        <div className="text-center">
          <h3 className="text-lg font-semibold">Confirm Delete</h3>
          <p className="my-4">Are you sure you want to delete {staffToDelete?.name}?</p>
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

export default Staff;
