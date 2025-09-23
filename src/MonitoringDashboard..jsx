import React, { useState, useEffect } from 'react';

const MonitoringDashboard = () => {
  const [inventoryData, setInventoryData] = useState([]);
  const [activityLog, setActivityLog] = useState([]);
  const [lastRefresh, setLastRefresh] = useState(new Date());

  const refreshData = () => {
    try {
      // Get inventory data from localStorage
      const inventory = localStorage.getItem('inventory');
      const activities = localStorage.getItem('activityLog');
      
      const parsedInventory = inventory ? JSON.parse(inventory) : [];
      const parsedActivities = activities ? JSON.parse(activities) : [];
      
      setInventoryData(parsedInventory);
      setActivityLog(parsedActivities);
      setLastRefresh(new Date());
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  useEffect(() => {
    refreshData();
    
    // Auto-refresh every 30 seconds
    const interval = setInterval(refreshData, 30000);
    
    return () => clearInterval(interval);
  }, []);

  // Calculate daily stats
  const today = new Date().toDateString();
  const todayItems = inventoryData.filter(item => {
    const itemDate = new Date(item.dateAdded || item.createdAt || Date.now()).toDateString();
    return itemDate === today;
  });

  const todayActivities = activityLog.filter(activity => {
    const activityDate = new Date(activity.timestamp || Date.now()).toDateString();
    return activityDate === today;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Inventory Monitoring Dashboard</h1>
          <button
            onClick={refreshData}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Refresh Data
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-700">Total Items</h3>
            <p className="text-3xl font-bold text-blue-600">{inventoryData.length}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-700">Added Today</h3>
            <p className="text-3xl font-bold text-green-600">{todayItems.length}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-700">Activities Today</h3>
            <p className="text-3xl font-bold text-purple-600">{todayActivities.length}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-700">Last Updated</h3>
            <p className="text-sm text-gray-600">{lastRefresh.toLocaleTimeString()}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activities */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Activities</h3>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {activityLog.slice(-10).reverse().map((activity, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                  <p className="font-medium text-gray-800">
                    {activity.action || 'Activity performed'}
                  </p>
                  <p className="text-sm text-gray-600">
                    {activity.details || 'No details available'}
                  </p>
                  <p className="text-xs text-gray-500">
                    {new Date(activity.timestamp || Date.now()).toLocaleString()}
                  </p>
                </div>
              ))}
              {activityLog.length === 0 && (
                <p className="text-gray-500 italic">No activities recorded yet.</p>
              )}
            </div>
          </div>

          {/* Recent Items */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Items</h3>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {inventoryData.slice(-10).reverse().map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-3">
                  <p className="font-medium text-gray-800">
                    {item.name || item.itemName || 'Unnamed Item'}
                  </p>
                  <div className="text-sm text-gray-600 mt-1">
                    <span className="mr-4">
                      Qty: {item.quantity || item.qty || 'N/A'}
                    </span>
                    {item.price && (
                      <span className="mr-4">
                        Price: ${item.price}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Added: {new Date(item.dateAdded || item.createdAt || Date.now()).toLocaleString()}
                  </p>
                </div>
              ))}
              {inventoryData.length === 0 && (
                <p className="text-gray-500 italic">No items in inventory yet.</p>
              )}
            </div>
          </div>
        </div>

        {/* System Info */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>Monitoring Dashboard - Real-time inventory tracking</span>
            <span>Auto-refresh: Every 30 seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonitoringDashboard;