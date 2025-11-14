import React, { useEffect, useState } from "react";
import axios from "axios";
import StatCard from "../components/StatCard";
import ActivityFeed from "../components/ActivityFeed";
import Alerts from "../components/Alerts";
import { FaConciergeBell, FaFileInvoice, FaUsers } from "react-icons/fa";

function Overview() {
  const [stats, setStats] = useState([
    { label: "Total Services", value: 0, icon: <FaConciergeBell /> },
    { label: "Quotes Submitted", value: 0, icon: <FaFileInvoice /> },
    { label: "Active Users", value: 0, icon: <FaUsers /> },
  ]);

  const BACKEND_URL = import.meta.env.BACKEND_URL || "http://localhost:4000/api";

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [servicesRes, staffRes, quotesRes] = await Promise.all([
          axios.get(`${BACKEND_URL}/services`),
          axios.get(`${BACKEND_URL}/staff`),
          axios.get(`${BACKEND_URL}/quotes`),
        ]);

        setStats([
          { label: "Total Services", value: servicesRes.data.length, icon: <FaConciergeBell /> },
          { label: "Quotes Submitted", value: quotesRes.data.length, icon: <FaFileInvoice /> },
          { label: "Active Users", value: staffRes.data.length, icon: <FaUsers /> },
        ]);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  const recentActivities = [
    {
      id: 1,
      type: "Quote",
      user: "Alice",
      date: "2025-07-14T10:15:00Z",
      description: "requested a wedding photography package.",
    },
    {
      id: 2,
      type: "Inquiry",
      user: "Bob",
      date: "2025-07-13T14:30:00Z",
      description: "asked about videography availability on weekends.",
    },
    {
      id: 3,
      type: "Quote",
      user: "Charlie",
      date: "2025-07-13T09:45:00Z",
      description: "requested a product photoshoot quote.",
    },
  ];

  const alerts = [
    "3 quotes pending review",
    "1 inquiry not responded",
    "User 'David' account approval pending",
  ];

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Overview</h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {stats.map((stat) => (
          <StatCard key={stat.label} label={stat.label} value={stat.value} icon={stat.icon} />
        ))}
      </div>

      {/* Alerts and Activity Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ActivityFeed activities={recentActivities} />
        </div>
        <Alerts alerts={alerts} />
      </div>
    </div>
  );
}

export default Overview;
