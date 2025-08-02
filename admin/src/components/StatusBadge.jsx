import React from "react";

function StatusBadge({ status }) {
  const colorMap = {
    pending: "bg-yellow-100 text-yellow-800",
    accepted: "bg-green-100 text-green-800",
    rejected: "bg-red-100 text-red-800",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${colorMap[status] || ""}`}>
      {status}
    </span>
  );
}

export default StatusBadge;
