import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

function Alerts({ alerts }) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
        <FaExclamationTriangle className="text-yellow-500 mr-2" />
        Alerts
      </h3>
      {alerts.length === 0 ? (
        <p className="text-gray-500">No pending alerts</p>
      ) : (
        <ul className="space-y-2">
          {alerts.map((alert, idx) => (
            <li key={idx} className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r-lg">
              <p className="text-yellow-800">{alert}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Alerts;
