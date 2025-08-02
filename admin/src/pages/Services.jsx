import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceForm from "../components/ServiceForm";
import ServiceList from "../components/ServiceList";

function Services() {
  // Example initial data, replace with API data
  const [services, setServices] = useState([
    {
      id: 1,
      name: "Wedding Photography",
      category: "Weddings",
      price: 1500,
      description: "Capture your special day beautifully.",
      imageUrl: "https://example.com/wedding.jpg",
      active: true,
    },
    {
      id: 2,
      name: "Product Videography",
      category: "Products",
      price: 800,
      description: "High-quality product videos to showcase your brand.",
      imageUrl: "https://example.com/product-video.jpg",
      active: false,
    },
  ]);

  const [editingService, setEditingService] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleAddClick = () => {
    setEditingService(null);
    setShowForm(true);
  };

  const handleFormSubmit = (serviceData) => {
    if (editingService) {
      // Update existing service
      setServices((prev) =>
        prev.map((svc) =>
          svc.id === editingService.id ? { ...svc, ...serviceData } : svc
        )
      );
    } else {
      // Add new service (generate id)
      const newService = {
        id: Date.now(),
        ...serviceData,
      };
      setServices((prev) => [newService, ...prev]);
    }
    setShowForm(false);
  };

  const handleEdit = (service) => {
    setEditingService(service);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      setServices((prev) => prev.filter((svc) => svc.id !== id));
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingService(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow max-w-5xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">
            Manage Services
          </h2>
          <button
            onClick={handleAddClick}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Add Service
          </button>
        </div>

        {showForm && (
          <ServiceForm
            initialData={editingService}
            onSubmit={handleFormSubmit}
            onCancel={handleCancel}
          />
        )}

        <ServiceList
          services={services}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </main>
    </div>
  );
}

export default Services;
