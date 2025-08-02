import React from "react";

function StatCard({ label, value }) {
  return (
    <div className="bg-white shadow rounded-lg p-6 text-center hover:shadow-md transition">
      <p className="text-lg font-medium text-gray-600">{label}</p>
      <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
    </div>
  );
}

export default StatCard;
