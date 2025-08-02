import React from "react";

function ActivityFeed({ activities }) {
  return (
    <div className="bg-white shadow rounded-lg p-6 max-h-96 overflow-y-auto">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Recent Activity</h3>
      <ul className="divide-y divide-gray-200">
        {activities.length === 0 ? (
          <li className="text-gray-500 text-center py-4">No recent activity</li>
        ) : (
          activities.map((item) => (
            <li key={item.id} className="py-3">
              <p className="text-gray-700">
                <strong>{item.type}</strong> from <em>{item.user}</em> on{" "}
                <time dateTime={item.date}>{new Date(item.date).toLocaleString()}</time>
              </p>
              <p className="text-sm text-gray-500">{item.description}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ActivityFeed;
