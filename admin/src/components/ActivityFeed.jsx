import React from "react";

function ActivityFeed({ activities }) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Recent Activity</h3>
      <ul className="divide-y divide-gray-200">
        {activities.length === 0 ? (
          <li className="text-gray-500 text-center py-4">No recent activity</li>
        ) : (
          activities.map((item) => (
            <li key={item.id} className="py-4 flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-blue-100 text-blue-500`}>
                  {item.type.charAt(0)}
                </div>
              </div>
              <div>
                <p className="text-gray-800">
                  <strong>{item.user}</strong> {item.description}
                </p>
                <p className="text-sm text-gray-500">
                  {new Date(item.date).toLocaleString()}
                </p>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ActivityFeed;
