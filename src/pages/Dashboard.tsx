// src/pages/Dashboard.tsx
import { useContext } from "react";
import AuthContext from "../context/authcontext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-indigo-600 px-6 py-4">
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        </div>

        <div className="p-6">
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-6">
            <p className="text-indigo-700">
              Welcome back,{" "}
              <span className="font-medium">{user?.displayName || "User"}</span>
              !
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Account Overview
              </h3>
              <p className="text-gray-600 mb-4">
                View and manage your account details
              </p>
              <div className="mt-4 flex justify-end">
                <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                  View Details
                </button>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Security Settings
              </h3>
              <p className="text-gray-600 mb-4">
                Update your password and security preferences
              </p>
              <div className="mt-4 flex justify-end">
                <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                  Manage Settings
                </button>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Notifications
              </h3>
              <p className="text-gray-600 mb-4">
                Configure your notification preferences
              </p>
              <div className="mt-4 flex justify-end">
                <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                  Configure
                </button>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Activity Log
              </h3>
              <p className="text-gray-600 mb-4">
                View your recent account activity
              </p>
              <div className="mt-4 flex justify-end">
                <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                  View Log
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
