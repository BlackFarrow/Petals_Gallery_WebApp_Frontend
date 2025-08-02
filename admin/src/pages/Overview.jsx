import React from "react";
import StatCard from "../components/StatCard";
import ActivityFeed from "../components/ActivityFeed";
import Alerts from "../components/Alerts";

function Overview() {
  // Dummy data — replace with API data later
  const stats = [
    { label: "Total Services", value: 15 },
    { label: "Quotes Submitted", value: 42 },
    { label: "Inquiries Received", value: 18 },
    { label: "Active Users", value: 12 },
  ];

  const recentActivities = [
    {
      id: 1,
      type: "Quote",
      user: "Alice",
      date: "2025-07-14T10:15:00Z",
      description: "Requested a wedding photography package.",
    },
    {
      id: 2,
      type: "Inquiry",
      user: "Bob",
      date: "2025-07-13T14:30:00Z",
      description: "Asked about videography availability on weekends.",
    },
    {
      id: 3,
      type: "Quote",
      user: "Charlie",
      date: "2025-07-13T09:45:00Z",
      description: "Requested a product photoshoot quote.",
    },
  ];

  const alerts = [
    "3 quotes pending review",
    "1 inquiry not responded",
    "User 'David' account approval pending",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">
          Admin Overview
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat) => (
            <StatCard key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </div>

        {/* Alerts and Activity Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Alerts alerts={alerts} />
          <div className="lg:col-span-2">
            <ActivityFeed activities={recentActivities} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Overview;
