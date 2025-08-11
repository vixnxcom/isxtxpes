// App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Sidebar from "./home/Sidebar"
import Header from "./home/Header";
import Inventory from "./inventory/Inventory";
import Credit from "./credit/Credit";
import Debit from "./debit/Debit";
import Invoice from "./invoice/Invoice";
import { useState } from "react";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { title: "Inventory", color: "bg-green-500", path: "/inventory" },
    { title: "Credit", color: "bg-blue-500", path: "/credit" },
    { title: "Debit", color: "bg-red-500", path: "/debit" },
    { title: "Generate Invoice", color: "bg-yellow-500", path: "/invoice" },
  ];

  return (
    <Router>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div
          className={`bg-pink-50 text-gray-700 p-6 transition-all duration-300
            ${sidebarOpen ? "w-64" : "w-0 overflow-hidden"}`}
        >
          <h1 className="text-2xl font-bold mb-8">My Dashboard</h1>
          <nav className="space-y-4">
            <Link to="/" className="block hover:text-gray-300">
              Home
            </Link>
            {menuItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                className="block hover:text-gray-300"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Main Content */}
      <div className="flex-1 bg-gray-50 p-6 w-screen min-h-screen">
          {/* Toggle Button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="mb-4 px-4 py-2 bg-pink-700 text-white rounded hover:bg-gray-600"
          >
            {sidebarOpen ? "Close Menu" : "Open Menu"}
          </button>

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h2 className="text-3xl font-bold text-gray-700 mb-6">
                    Dashboard
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {menuItems.map((item, index) => (
                      <Link
                        to={item.path}
                        key={index}
                        className={`p-8 rounded-xl shadow-lg text-white font-semibold text-lg
                           flex items-center justify-center hover:scale-105 transform transition-all 
                           cursor-pointer ${item.color}`}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </>
              }
            />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/credit" element={<Credit />} />
            <Route path="/debit" element={<Debit />} />
            <Route path="/invoice" element={<Invoice />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;