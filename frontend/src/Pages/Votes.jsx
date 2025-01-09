import React from "react";
import "./admin.css"; // Add specific styling if needed.

const Votes = () => {
  const votes = [
    { id: 1, voterName: "Alice Johnson", candidate: "John Doe", timestamp: "2024-11-28 10:23:45" },
    { id: 2, voterName: "Bob Smith", candidate: "Jane Smith", timestamp: "2024-11-28 11:15:32" },
    { id: 3, voterName: "Charlie Brown", candidate: "Sam Wilson", timestamp: "2024-11-28 12:00:00" },
  ];

  return (
    <div className="page-container">
      {/* Header */}
      <header className="bg-purple-600 text-white py-6 px-4 text-center">
        <h1 className="text-3xl font-bold">View Votes</h1>
        <p className="text-lg mt-2">Audit and monitor all submitted votes.</p>
      </header>

      {/* Main Content */}
      <main className="py-12 px-4 bg-gray-100">
        <div className="container mx-auto">
          <table className="min-w-full bg-white shadow-lg">
            <thead>
              <tr>
                <th className="py-4 px-6 bg-gray-200 font-semibold">ID</th>
                <th className="py-4 px-6 bg-gray-200 font-semibold">Voter Name</th>
                <th className="py-4 px-6 bg-gray-200 font-semibold">Candidate</th>
                <th className="py-4 px-6 bg-gray-200 font-semibold">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {votes.map((vote) => (
                <tr key={vote.id} className="text-center">
                  <td className="py-4 px-6 border-b">{vote.id}</td>
                  <td className="py-4 px-6 border-b">{vote.voterName}</td>
                  <td className="py-4 px-6 border-b">{vote.candidate}</td>
                  <td className="py-4 px-6 border-b">{vote.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-purple-600 text-white py-6 text-center">
        <p>&copy; 2024 SecureVote Admin Panel - Votes Page.</p>
      </footer>
    </div>
  );
};

export default Votes;
