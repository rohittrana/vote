import React, { useState } from "react";
import "./admin.css"; // Add specific styling if needed.

const Settings = () => {
  const [settings, setSettings] = useState({
    platformName: "SecureVote",
    maxCandidates: 5,
    enableEmailNotifications: true,
    theme: "light",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSaveSettings = () => {
    alert("Settings have been updated!");
    // Add logic to save settings to the backend here
  };

  return (
    <div className="page-container">
      {/* Header */}
      <header className="bg-red-600 text-white py-6 px-4 text-center">
        <h1 className="text-3xl font-bold">Platform Settings</h1>
        <p className="text-lg mt-2">Configure platform preferences and policies.</p>
      </header>

      {/* Main Content */}
      <main className="py-12 px-4 bg-gray-100">
        <div className="container mx-auto bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">Settings</h2>
          <form className="space-y-6">
            <div>
              <label className="block font-medium">Platform Name</label>
              <input
                type="text"
                name="platformName"
                value={settings.platformName}
                onChange={handleInputChange}
                className="mt-1 block w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block font-medium">Maximum Candidates</label>
              <input
                type="number"
                name="maxCandidates"
                value={settings.maxCandidates}
                onChange={handleInputChange}
                className="mt-1 block w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block font-medium flex items-center">
                <input
                  type="checkbox"
                  name="enableEmailNotifications"
                  checked={settings.enableEmailNotifications}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Enable Email Notifications
              </label>
            </div>
            <div>
              <label className="block font-medium">Theme</label>
              <select
                name="theme"
                value={settings.theme}
                onChange={handleInputChange}
                className="mt-1 block w-full border rounded px-3 py-2"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>
            <button
              type="button"
              onClick={handleSaveSettings}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Save Settings
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-red-600 text-white py-6 text-center">
        <p>&copy; 2024 SecureVote Admin Panel - Settings Page.</p>
      </footer>
    </div>
  );
};

export default Settings;
