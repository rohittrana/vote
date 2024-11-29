import React from "react";
import "./admin.css"; // Add specific styling if needed.

const Logs = () => {
  const logs = [
    { id: 1, action: "User Login", user: "Alice Johnson", timestamp: "2024-11-28 10:23:45" },
    { id: 2, action: "Vote Cast", user: "Bob Smith", timestamp: "2024-11-28 11:15:32" },
    { id: 3, action: "Settings Updated", user: "Admin", timestamp: "2024-11-28 12:00:00" },
  ];

  return (
    <div className="page-container">
      {/* Header */}
      <header className="bg-gray-600 text-white py-6 px-4 text-center">
        <h1 className="text-3xl font-bold">System Logs</h1>
        <p className="text-lg mt-2">Monitor platform activities and actions.</p>
      </header>

      {/* Main Content */}
      <main className="py-12 px-4 bg-gray-100">
        <div className="container mx-auto">
          <table className="min-w-full bg-white shadow-lg">
            <thead>
              <tr>
                <th className="py-4 px-6 bg-gray-200 font-semibold">ID</th>
                <th className="py-4 px-6 bg-gray-200 font-semibold">Action</th>
                <th className="py-4 px-6 bg-gray-200 font-semibold">User</th>
                <th className="py-4 px-6 bg-gray-200 font-semibold">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log.id} className="text-center">
                  <td className="py-4 px-6 border-b">{log.id}</td>
                  <td className="py-4 px-6 border-b">{log.action}</td>
                  <td className="py-4 px-6 border-b">{log.user}</td>
                  <td className="py-4 px-6 border-b">{log.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-600 text-white py-6 text-center">
        <p>&copy; 2024 SecureVote Admin Panel - Logs Page.</p>
      </footer>
    </div>
  );
};

export default Logs;
