import React from "react";
import "./admin.css"; // Add specific styling if needed.

const Candidates = () => {
  const candidates = [
    { id: 1, name: "rohit rana", position: "President", status: "Approved" },
    { id: 2, name: "kirti jirati", position: "Vice President", status: "Pending" },
    { id: 3, name: "Nishchay ", position: "Treasurer", status: "Rejected" },
  ];

  return (
    <div className="page-container">
      {/* Header */}
      <header className="bg-green-600 text-white py-6 px-4 text-center">
        <h1 className="text-3xl font-bold">Manage Candidates</h1>
        <p className="text-lg mt-2">Add, edit, or manage candidates for the election.</p>
      </header>

      {/* Main Content */}
      <main className="py-12 px-4 bg-gray-100">
        <div className="container mx-auto">
          <div className="flex justify-end mb-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Add Candidate
            </button>
          </div>
          <table className="min-w-full bg-white shadow-lg">
            <thead>
              <tr>
                <th className="py-4 px-6 bg-gray-200 font-semibold">ID</th>
                <th className="py-4 px-6 bg-gray-200 font-semibold">Name</th>
                <th className="py-4 px-6 bg-gray-200 font-semibold">Position</th>
                <th className="py-4 px-6 bg-gray-200 font-semibold">Status</th>
                <th className="py-4 px-6 bg-gray-200 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((candidate) => (
                <tr key={candidate.id} className="text-center">
                  <td className="py-4 px-6 border-b">{candidate.id}</td>
                  <td className="py-4 px-6 border-b">{candidate.name}</td>
                  <td className="py-4 px-6 border-b">{candidate.position}</td>
                  <td className="py-4 px-6 border-b">
                    <span
                      className={`px-2 py-1 rounded ${
                        candidate.status === "Approved"
                          ? "bg-green-200 text-green-800"
                          : candidate.status === "Pending"
                          ? "bg-yellow-200 text-yellow-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      {candidate.status}
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
      <footer className="bg-green-600 text-white py-6 text-center">
        <p>&copy; 2024 SecureVote Admin Panel - Candidates Page.</p>
      </footer>
    </div>
  );
};

export default Candidates;
