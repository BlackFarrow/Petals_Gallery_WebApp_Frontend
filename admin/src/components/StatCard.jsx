import React from "react";

function StatCard({ label, value, icon }) {
  return (
    <div className="bg-white shadow rounded-lg p-6 flex items-center">
      <div className="bg-blue-500 text-white p-4 rounded-full">
        {icon}
      </div>
      <div className="ml-4">
        <p className="text-lg font-medium text-gray-600">{label}</p>
        <p className="text-3xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
}

export default StatCard;
