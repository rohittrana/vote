import React from "react";
import "./admin.css"; // Optional for custom styles

const Admin = () => {
  const handleButtonClick = (section) => {
    alert(`Navigating to ${section} section!`);
    // Logic for navigation can be added here, e.g., using useNavigate or window.location
  };

  return (
    <div className="admin-page flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-700 text-white py-6 px-4 text-center">
        <h1 className="text-4xl font-bold">Admin Dashboard</h1>
        <p className="text-lg mt-2">Manage and oversee the voting platform</p>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Buttons for Admin Sections */}
          <button
            onClick={() => handleButtonClick("Manage Users")}
            className="bg-blue-500 text-white py-4 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 text-center"
          >
            Manage Users
          </button>

          <button
            onClick={() => handleButtonClick("Manage Candidates")}
            className="bg-green-500 text-white py-4 px-6 rounded-lg shadow-md hover:bg-green-600 transition duration-300 text-center"
          >
            Manage Candidates
          </button>

          <button
            onClick={() => handleButtonClick("View Votes")}
            className="bg-purple-500 text-white py-4 px-6 rounded-lg shadow-md hover:bg-purple-600 transition duration-300 text-center"
          >
            View Votes
          </button>

          <button
            onClick={() => handleButtonClick("Settings")}
            className="bg-gray-500 text-white py-4 px-6 rounded-lg shadow-md hover:bg-gray-600 transition duration-300 text-center"
          >
            Settings
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 SecureVote Admin Panel. Built with ❤️</p>
      </footer>
    </div>
  );
};

export default Admin;
