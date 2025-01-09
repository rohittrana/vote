import React from "react";
import { Bar, Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import "./admin.css"; // Add specific styling if needed.

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

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

  const votingTrendData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Votes Cast Over Time",
        data: [50, 120, 180, 300],
        backgroundColor: "rgba(33, 150, 243, 0.5)",
        borderColor: "#2196f3",
        borderWidth: 2,
        tension: 0.3,
        fill: true,
      },
    ],
  };

  return (
    <div className="page-container">
      {/* Header */}
      <header className="bg-yellow-600 text-white py-6 px-4 text-center">
        <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
        <p className="text-lg mt-2">
          Visualize system performance, voting patterns, and user engagement data.
        </p>
      </header>

      {/* Main Content */}
      <main className="py-12 px-4 bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bar Chart: Voting Results */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-center">Voting Results</h2>
            <p className="text-gray-600 mb-6 text-center">
              Overview of votes received for each position. Analyze the distribution and trends.
            </p>
            <Bar data={votingData} />
          </div>

          {/* Pie Chart: User Activity */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-center">User Activity</h2>
            <p className="text-gray-600 mb-6 text-center">
              Breakdown of active vs. inactive users to assess engagement levels.
            </p>
            <Pie data={userActivityData} />
          </div>

          {/* Line Chart: Voting Trends */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-center">Voting Trends</h2>
            <p className="text-gray-600 mb-6 text-center">
              Weekly analysis of votes cast over time to monitor campaign effectiveness.
            </p>
            <Line data={votingTrendData} />
          </div>

          {/* Insights Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-center">Key Insights</h2>
            <ul className="list-disc text-gray-600 pl-6 space-y-4">
              <li>
                <strong>Presidential votes:</strong> Leading with 300 votes, indicating high voter interest.
              </li>
              <li>
                <strong>Inactive users:</strong> 25% of registered users are inactive, highlighting a potential area for outreach.
              </li>
              <li>
                <strong>Peak voting activity:</strong> Observed during Week 4, suggesting campaign efforts were successful.
              </li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-yellow-600 text-white py-6 text-center">
        <p>&copy; 2024 SecureVote Admin Panel - Analytics Dashboard.</p>
        <p className="mt-2">
          Need help? Check out our{" "}
          <a href="/help" className="text-blue-300 hover:underline">
            Help Center
          </a>{" "}
          or contact{" "}
          <a href="/support" className="text-blue-300 hover:underline">
            Support Team
          </a>
          .
        </p>
        <p className="text-sm mt-2">
          Designed to ensure secure, efficient, and insightful election analytics.
        </p>
      </footer>
    </div>
  );
};

export default Analytics;
