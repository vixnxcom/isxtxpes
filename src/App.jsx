// App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import Inventory from "./inventory/Inventory";
import Credit from "./credit/Credit";
import Debit from "./debit/Debit";
import Invoice from "./invoice/Invoice";
import { useState } from "react";
import { home, credit, debit, invent, invoice } from "./assets";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

 
const menuItems = [
  { title: "Inventory", color: "bg-green-500", path: "/inventory", icon: invent},
  { title: "Credit", color: "bg-blue-500", path: "/credit", icon: credit },
  { title: "Debit", color: "bg-red-500", path: "/debit", icon: debit },
  { title: "Generate Invoice", color: "bg-yellow-500", path: "/invoice", icon: invoice },
];

  return (
    <Router>
      <div className="flex min-h-screen">
        {/* Sidebar */}
      {/* Sidebar */}
<div
  className={`bg-white gray200 p-6 transition-all duration-300
    ${sidebarOpen ? "w-64" : "w-0 overflow-hidden"}`}
>
  {sidebarOpen && (
    <>
      <h1 className="text-2xl aeon-bold gray200 mb-8">My Dashboard</h1>
      <nav className="space-y-4 ">
        <Link 
          to="/" 
          className="block hover:bg-gray-200 inter border flex flex-row  border-gray-200 px-1 py-2 bg-white rounded-[8px]"
        > <span><img src={home} className="w-4 h-4 mr-2 mt-1" /></span>
          Home
        </Link>
        {menuItems.map((item, idx) => (
  <Link
    key={idx}
    to={item.path}
    className="flex flex-row items-center hover:bg-gray-200 inter border border-gray-200 px-1 py-2 bg-white rounded-[8px]"
  >
    <span>
      <img src={item.icon} className="w-4 h-4 mr-2" />
    </span>
    {item.title}
  </Link>
))}

      </nav>
    </>
  )}
</div>


        {/* Main Content */}
      <div className="flex-1 bg-purple-50 p-5 w-[100vw] min-h-screen">
          {/* Toggle Button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="mb-4 px-4 py-2 bg-white gray200 intermid text-xs border border-gray-200 rounded-lg hover:bg-gray-200"
          >
            {sidebarOpen ? "Close Menu" : "Open Menu"}
          </button>

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h2 className="text-3xl aeon-bold text-gray-700 mb-6">
                    Dashboard
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {menuItems.map((item, index) => (
                      <Link
                        to={item.path}
                        key={index}
                        className={`p-8 rounded-xl shadow-lg text-white intermid text-lg
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