import { useState } from "react";
import { Link } from "react-router-dom";
import { open } from "./assets";
import styles from "./style";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-4 fixed w-full top-0 left-0 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-black text-xl font-bold">MyLogo</h1>

        {/* Mobile Menu Button */}
        <button
          className="text-black md:hidden noto flex  flex-row"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <div className="mt-2">
          {isOpen ? "Close" : "Open" }
          </div>
          <img src={open} alt="" className="w-4 " />
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
              to="/offer"
              className="block py-2 px-4 text-black hover:bg-blue-500 md:hover:bg-transparent noto text-[20px]"
            >
              Our Offer
            </Link>
          </li>
          <li>
            <Link
              to="/giveaway"
              className="block py-2 px-4 text-black hover:bg-blue-500 md:hover:bg-transparent noto text-[20px]"
            >
             Our Exclusive Giveaway
            </Link>
          </li>
        
          <li>
            <Link
              to="/works"
              className="block py-2 px-4 text-black hover:bg-blue-500 md:hover:bg-transparent noto text-[20px]"
            >
             How to become a Partner
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="text-black hover:bg-blue-500 md:hover:bg-transparent py-2 px-4 block "
            >
              <p className={`${styles.paragraphx} flex justify-content-center align-items-center`}>Become a Partner today!</p>
           <div className=" bg-gold md:w-[24vw] md:h-[4vw] w-[60vw] rounded-[24px] h-[12vw] mt-2">
          <p className="aeon-bold text-black text-[20px] mx-auto flex justify-center items-center py-2">
            Register Now
          </p>
           </div>
           
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
