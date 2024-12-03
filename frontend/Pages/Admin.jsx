import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./admin.css"; // Ensure this file exists for additional custom styling if needed.

const Admin = () => {
  return (
    <div className="admin-page">
      {/* Admin Dashboard Header */}
      <header className="bg-gray-800 text-white py-6 px-4 text-center">
        <h1 className="text-4xl font-bold">Admin Dashboard</h1>
        <p className="text-lg mt-2">Manage and oversee the voting platform</p>
      </header>

      {/* Main Navigation Links */}
      <main className="py-12 px-4 bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Core Functionality Cards */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h2 className="text-2xl font-semibold mb-4">Manage Users</h2>
            <p className="text-gray-600 mb-6">
              View and manage all registered users. Approve, suspend, or remove users.
            </p>
            <Link
              to="/admin/users"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              View Users
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h2 className="text-2xl font-semibold mb-4">Manage Candidates</h2>
            <p className="text-gray-600 mb-6">
              Add, edit, or remove candidates participating in elections.
            </p>
            <Link
              to="/admin/candidates"
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
              View Candidates
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h2 className="text-2xl font-semibold mb-4">View Votes</h2>
            <p className="text-gray-600 mb-6">
              Access and audit all votes to ensure transparency and accuracy.
            </p>
            <Link
              to="/admin/votes"
              className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
            >
              View Votes
            </Link>
          </div>

          {/* Add remaining cards here (Settings, Logs, etc.) */}
        </div>

        {/* Nested Routes Placeholder */}
        <div className="mt-10">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2024 SecureVote Admin Panel. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Admin;