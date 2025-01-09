import React from "react";
import "./admin.css"; // Add any specific styling here if needed.

const Users = () => {
  const users = [
    { id: 1, name: "Alice", email: "alice@example.com", status: "Active" },
    { id: 2, name: "Bob", email: "bob@example.com", status: "Suspended" },
    { id: 3, name: "Charlie", email: "charlie@example.com", status: "Pending" },
  ];

  return (
    <div className="page-container">
      <header className="bg-blue-600 text-white py-6 px-4 text-center">
        <h1 className="text-3xl font-bold">Manage Users</h1>
      </header>
      <main className="py-12 px-4 bg-gray-100">
        <div className="container mx-auto">
          <table className="min-w-full bg-white shadow-lg">
            <thead>
              <tr>
                <th className="py-4 px-6 bg-gray-200 font-semibold">ID</th>
                <th className="py-4 px-6 bg-gray-200 font-semibold">Name</th>
                <th className="py-4 px-6 bg-gray-200 font-semibold">Email</th>
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
                  <td className="py-4 px-6 border-b">
                    <span
                      className={`px-2 py-1 rounded ${
                        user.status === "Active"
                          ? "bg-green-200 text-green-800"
                          : user.status === "Suspended"
                          ? "bg-red-200 text-red-800"
                          : "bg-yellow-200 text-yellow-800"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 border-b">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600">
                      Approve
                    </button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                      Suspend
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <footer className="bg-blue-600 text-white py-6 text-center">
        <p>&copy; 2024 SecureVote Admin Panel - Users Page.</p>
      </footer>
    </div>
  );
};

export default Users;
