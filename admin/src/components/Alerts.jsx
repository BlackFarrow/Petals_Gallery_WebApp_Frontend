import React from "react";

function Alerts({ alerts }) {
  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg max-w-xl">
      <h3 className="text-yellow-800 font-semibold mb-2">Alerts</h3>
      {alerts.length === 0 ? (
        <p className="text-yellow-700">No pending alerts</p>
      ) : (
        <ul className="list-disc pl-5 space-y-1 text-yellow-700">
          {alerts.map((alert, idx) => (
            <li key={idx}>{alert}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Alerts;
