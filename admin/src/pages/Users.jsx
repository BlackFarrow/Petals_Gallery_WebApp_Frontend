import React, { useState } from "react";
import UserTable from "../components/UserTable";
import UserDetailsModal from "../components/UserDetailsModal";

function Users() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      role: "admin",
      active: true,
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob@example.com",
      role: "staff",
      active: true,
    },
    {
      id: 3,
      name: "Charlie Client",
      email: "charlie@example.com",
      role: "client",
      active: false,
    },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);

  const handleUpdate = (updatedUser) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">
          Manage Users
        </h2>
        <UserTable users={users} onSelect={setSelectedUser} />
        {selectedUser && (
          <UserDetailsModal
            user={selectedUser}
            onClose={() => setSelectedUser(null)}
            onUpdate={handleUpdate}
          />
        )}
      </main>
    </div>
  );
}

export default Users;
