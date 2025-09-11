import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import Inventory from "../inventory/Inventory";
import Credit from "../credit/Credit";
import Debit from "../debit/Debit";
import Invoice from "../invoice/Invoice";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../home/Home";   // dashboard home content
import ButtonPages from "./ButtonPages";

// Import assets
import { 
  home, credit, debit, invent, invoice, 
  close, open, admin, coins, paycard, 
  atm,
  file,
  calc,
  dcard
} from "../assets";

function Pages() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Sidebar menu items
  const menuItems = [
    { title: "Inventory", color: "text-white", path: "/pages/inventory", icon: invent },
    { title: "Credit Account", color: "text-white", path: "/pages/credit", icon: credit },
    { title: "Debit Account", color: "text-white", path: "/pages/debit", icon: debit },
    { title: "Generate Invoice", color: "text-white", path: "/pages/invoice", icon: invoice },
  ];

  // Dashboard home cards (separate icons)
  const dashboardCards = [
    { title: "Inventory", color: "text-black", path: "/pages/inventory", icon: calc },
    { title: "Credit Account", color: "text-black", path: "/pages/credit", icon: atm },
    { title: "Debit", color: "text-black", path: "/pages/debit", icon: dcard },
    { title: "Invoice", color: "text-black", path: "/pages/invoice", icon: file},
  ];

  return (
    <div>
      {/* Header */}
      <Header />

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div
          className={`bg-white gray200 p-6 transition-all duration-300
          ${sidebarOpen ? "w-64" : "w-0 overflow-hidden"}`}
        >
          {sidebarOpen && (
            <>
              <h1 className="text-2xl aeon-bold gray200 mb-8">My Dashboard</h1>
              <nav className="space-y-4">
                <Link
                  to="/pages"
                  className="block hover:bg-gray-200 inter border flex flex-row 
                  border-gray-200 px-1 py-2 bg-white rounded-[8px]"
                >
                  <span>
                    <img src={home} className="w-4 h-4 mr-2 mt-1 mx-2" />
                  </span>
                  Home
                </Link>

                {menuItems.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    className="flex flex-row items-center hover:bg-gray-200 inter border 
                    border-gray-200 px-1 py-2 bg-white rounded-[8px]"
                  >
                    <span>
                      <img src={item.icon} className="w-4 h-4 mr-2 mx-2" />
                    </span>
                    {item.title}
                  </Link>
                ))}
              </nav>
            </>
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-purple-100 p-4 w-[100vw] min-h-screen rounded-[14px]">
          {/* Toggle Button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="mb-4 px-4 py-2 bg-white flex flex-row items-center gap-2 text-xs 
            border border-gray-200 rounded-[14px] hover:bg-gray-200"
          >
            <img
              src={sidebarOpen ? close : open}
              alt={sidebarOpen ? "Close sidebar" : "Open sidebar"}
              className="w-4 h-4"
            />
            {sidebarOpen ? "Close Menu" : "Open Menu"}
          </button>

          {/* Routes inside Dashboard */}
          <Routes>
            {/* Dashboard Home */}
            <Route
              path="/"
              element={
                <div className="bg-dash w-full min-h-[80vh]">
                  <h2 className="text-3xl aeon-bold text-black mb-6">
                    Dashboard
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {dashboardCards.map((card, index) => (
                      <Link
                        to={card.path}
                        key={index}
                        className={`py-8 px-6 rounded-[16px] shadow-md border border-purple-200 inter
                        text-xl bg-white flex items-left  justify-left hover:scale-105 transform 
                        hover:bg-indigo-800 hover:!text-white transition-all cursor-pointer ${card.color}`}
                      >
                        <span className="w-12 h-12 rounded-full border-purple-500 bg-purple-200  flex items-center justify-center">
                          <img src={card.icon} className="w-8" />
                        </span>
                        <span className="mt-2 mx-4">{card.title}</span>
                        
                      </Link>
                    ))}
                  </div>
                </div>
              }
            />

            {/* Other pages */}
            <Route path="button" element={<ButtonPages />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="credit" element={<Credit />} />
            <Route path="debit" element={<Debit />} />
            <Route path="invoice" element={<Invoice />} />
          </Routes>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Pages;
