import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-4 fixed w-full top-0 left-0 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-black text-xl font-bold">MyLogo</h1>

        {/* Mobile Menu Button */}
        <button
          className="text-black md:hidden noto"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? "Close" : "Open"}
        </button>

        {/* Fix: Add `top-16` to push menu below navbar */}
        <ul
          className={`absolute md:static bg-white  w-full md:w-auto left-0 md:bg-transparent flex flex-col
             md:flex-row md:space-x-6 p-4 md:p-0  transition-all duration-300 ease-in-out ${
            isOpen ? "block top-16" : "hidden"
          } md:flex`}
        >
          <li>
            <Link
              to="/"
              className="block py-2 px-4 text-black hover:bg-blue-500 md:hover:bg-transparent noto text-[20px]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
             className="block py-2 px-4 text-black hover:bg-blue-500 md:hover:bg-transparent noto text-[20px]"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="block py-2 px-4 text-black hover:bg-blue-500 md:hover:bg-transparent noto text-[20px]"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block py-2 px-4 text-black hover:bg-blue-500 md:hover:bg-transparent noto text-[20px]"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
