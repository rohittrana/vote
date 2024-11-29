import React from "react";
import "./admin.css"; // Add specific styling if needed.

const UserManagement = () => {
  const users = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", role: "User", status: "Inactive" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "Moderator", status: "Active" },
  ];

  return (
    <div className="page-container">
      {/* Header */}
      <header className="bg-indigo-600 text-white py-6 px-4 text-center">
        <h1 className="text-3xl font-bold">User Management</h1>
        <p className="text-lg mt-2">Manage roles, update statuses, and edit user details.</p>
      </header>

      {/* Main Content */}
      <main className="py-12 px-4 bg-gray-100">
        <div className="container mx-auto">
          <div className="flex justify-end mb-4">
            <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">
              Add New User
            </button>
          </div>
          <table className="min-w-full bg-white shadow-lg">
            <thead>
              <tr>
                <th className="py-4 px-6 bg-gray-200 font-semibold">ID</th>
                <th className="py-4 px-6 bg-gray-200 font-semibold">Name</th>
                <th className="py-4 px-6 bg-gray-200 font-semibold">Email</th>
                <th className="py-4 px-6 bg-gray-200 font-semibold">Role</th>
                <th className="py-4 px-6 bg-gray-200 font-semibold">Status</th>
                <th className="py-4 px-6 bg-gray-200 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="text-center">
                  <td className="py-4 px-6 border-b">{user.id}</td>
                  <td className="py-4 px-6 border-b">{user.name}</td>
                  <td className="py-4 px-6 border-b">{user.email}</td>
                  <td className="py-4 px-6 border-b">{user.role}</td>
                  <td className="py-4 px-6 border-b">
                    <span
                      className={`px-2 py-1 rounded ${
                        user.status === "Active"
                          ? "bg-green-200 text-green-800"
                          : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 border-b">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-indigo-600 text-white py-6 text-center">
        <p>&copy; 2024 SecureVote Admin Panel - User Management Page.</p>
      </footer>
    </div>
  );
};

export default UserManagement;
