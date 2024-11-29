import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import "./admin.css"; // Add specific styling if needed.

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const Analytics = () => {
  const votingData = {
    labels: ["President", "Vice President", "Treasurer"],
    datasets: [
      {
        label: "Votes Received",
        data: [300, 200, 150],
        backgroundColor: ["#4caf50", "#2196f3", "#ff9800"],
      },
    ],
  };

  const userActivityData = {
    labels: ["Active Users", "Inactive Users"],
    datasets: [
      {
        data: [75, 25],
        backgroundColor: ["#8e44ad", "#95a5a6"],
      },
    ],
  };

  return (
    <div className="page-container">
      {/* Header */}
      <header className="bg-yellow-600 text-white py-6 px-4 text-center">
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="text-lg mt-2">Visualize system performance and voting patterns.</p>
      </header>

      {/* Main Content */}
      <main className="py-12 px-4 bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bar Chart: Voting Results */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-center">Voting Results</h2>
            <Bar data={votingData} />
          </div>

          {/* Pie Chart: User Activity */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-center">User Activity</h2>
            <Pie data={userActivityData} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-yellow-600 text-white py-6 text-center">
        <p>&copy; 2024 SecureVote Admin Panel - Analytics Page.</p>
      </footer>
    </div>
  );
};

export default Analytics;
