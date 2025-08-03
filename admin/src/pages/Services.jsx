import React, { useEffect, useState } from "react";
import ServiceForm from "../components/ServiceForm";
import ServiceList from "../components/ServiceList";
import axios from "axios";

function Services() {
  // Example initial data, replace with API data
  const [services, setServices] = useState([]);

  //url from .env
  const BACKEND_URL =
    import.meta.env.BACKEND_URL || "http://localhost:4000/api";

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/services`);
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);

  console.log(services);

  return  <div className="max-w-7xl mx-auto px-6 py-12 ">
      {services.map((service) => (
        <div
          key={service.id}
          className="bg-white rounded-lg  p-4 flex justify-between items-center mb-2 border-2 shadow-lg"
        >
          <div>
            <h4 className="font-semibold text-lg">{service.title}</h4>
            <p className="text-sm text-gray-600">{service.category}</p>
            <p className="text-sm font-medium">${service.price}</p>
            <p className="text-sm mt-1">{service.description}</p>
            {service.active ? (
              <span className="inline-block mt-1 text-green-600 font-semibold">
                Active
              </span>
            ) : (
              <span className="inline-block mt-1 text-red-600 font-semibold">
                Inactive
              </span>
            )}
          </div>

          <div className="space-x-2">
            <button
              
              className="text-blue-600 hover:underline"
            >
              Edit
            </button>
            <button
              
              className="text-red-600 hover:underline"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
}

export default Services;
