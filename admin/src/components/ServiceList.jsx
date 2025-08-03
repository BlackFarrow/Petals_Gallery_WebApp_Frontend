import React from "react";

function ServiceList({services}) {
  if (services.length === 0)
    return <p className="text-gray-600 italic">No services available.</p>;

  return (
    <div className="space-y-4">
      {services.map((service) => (
        <div
          key={service.id}
          className="bg-white rounded-lg shadow p-4 flex justify-between items-center"
        >
          <div>
            <h4 className="font-semibold text-lg">{service.name}</h4>
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
  );
}

export default ServiceList;
