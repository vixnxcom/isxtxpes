// Sidebar.jsx
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg">
      <div className="p-4 text-xl font-bold border-b">My Dashboard</div>
      <nav className="mt-4">
        <Link to="/" className="flex items-center p-3 hover:bg-gray-200">
          📦 <span className="ml-2">Inventory</span>
        </Link>
        <Link to="/credit" className="flex items-center p-3 hover:bg-gray-200">
          💰 <span className="ml-2">Credit</span>
        </Link>
        <Link to="/debit" className="flex items-center p-3 hover:bg-gray-200">
          💸 <span className="ml-2">Debit</span>
        </Link>
        <Link to="/invoice" className="flex items-center p-3 hover:bg-gray-200">
          🧾 <span className="ml-2">Generate Invoice</span>
        </Link>
      </nav>
    </aside>
  );
}
