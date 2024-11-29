import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../pages/manageusers.css";

const ManageCandidates = () => {
  const [candidates, setCandidates] = useState([
    { id: 1, name: "Alice Green", position: "President", status: "Active" },
    { id: 2, name: "Bob Brown", position: "Secretary", status: "Inactive" },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setCandidates((prevCandidates) =>
      prevCandidates.map((candidate) =>
        candidate.id === id ? { ...candidate, status: newStatus } : candidate
      )
    );
  };

  return (
    <div className="manage-candidates">
      <header className="header bg-blue-500 text-white py-6 text-center">
        <h1 className="text-3xl font-bold">Manage Candidates</h1>
      </header>

      <main className="main py-6 bg-gray-100">
        <div className="container mx-auto">
          <table className="table-auto w-full text-left bg-white shadow-md rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Position</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((candidate) => (
                <tr key={candidate.id} className="border-b">
                  <td className="px-4 py-2">{candidate.name}</td>
                  <td className="px-4 py-2">{candidate.position}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`badge ${
                        candidate.status === "Active"
                          ? "badge-active"
                          : "badge-inactive"
                      }`}
                    >
                      {candidate.status}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <button
                      className="btn-primary"
                      onClick={() => handleStatusChange(candidate.id, "Active")}
                    >
                      Activate
                    </button>
                    <button
                      className="btn-secondary"
                      onClick={() => handleStatusChange(candidate.id, "Inactive")}
                    >
                      Deactivate
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default ManageCandidates;
