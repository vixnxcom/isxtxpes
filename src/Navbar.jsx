import { useState } from "react";
import { Link } from "react-router-dom";
import { logo, open } from "./assets";
import styles from "./style";
import { HashLink } from "react-router-hash-link";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-4 fixed w-full top-0 left-0 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
         {/* <h1 className=" flex flex-row gap-2 blue text-xl aeon-bold mt-2"> <span> <img src={logo} alt=""  className="w-16 "/></span>The Diamond Project</h1>  */}
        <img src={logo} alt=""  className="w-16 "/> 
         
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
            <HashLink
              smooth to="/home#hero"
              
              // scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}
              className="block py-2 px-4 text-black hover:bg-blue-500 md:hover:bg-transparent noto text-[20px]"
            >
              Home
            </HashLink>
          </li>

        

          <li>
            <HashLink
             smooth to="/offer#path"
              className="block py-2 px-4 text-black hover:bg-blue-500 md:hover:bg-transparent noto text-[20px]"
            >
              Our Offer
            </HashLink>
          </li>
          <li>
            <HashLink
           smooth to="/giveaway#givway"
              className="block py-2 px-4 text-black hover:bg-blue-500 md:hover:bg-transparent noto text-[20px]"
            >
          One Million Naira Blueprint
            </HashLink>
          </li>

          <li>

            <HashLink
             to="/home#team"
              className="block py-2 px-4 text-black hover:bg-blue-500 md:hover:bg-transparent noto text-[20px]"
            >
             Our Team
            </HashLink>
          </li>
          <li>

            <HashLink
              to="/home#vtestimonials"
              className="block py-2 px-4 text-black hover:bg-blue-500 md:hover:bg-transparent noto text-[20px]"
            >
            Video Testimonials
            </HashLink>
          </li>
        
          <li>

            <HashLink
            smooth  to="/group#groups"
              className="block py-2 px-4 text-black hover:bg-blue-500 md:hover:bg-transparent noto text-[20px]"
            >
           Telegram Group
            </HashLink>
          </li>
        
          <li>
            <HashLink
            smooth  to="/works#join"
              className="block py-2 px-4 text-black hover:bg-blue-500 md:hover:bg-transparent noto text-[20px]"
            >
             How to Become a Partner
            </HashLink>
          </li>
          <li>
            <p className="text-black hover:bg-blue-500 md:hover:bg-transparent py-2 px-4 block "
            >
              <p className={`${styles.paragraphx} flex justify-content-center align-items-center`}>Become a Partner today!</p>
              </p>
           <button className=" bg-gold md:w-[24vw] md:h-[4vw] shadowx w-[60vw] rounded-[24px] h-[12vw] mt-2">
          <HashLink smooth to = '/register#topreg' className="aeon-bold text-black text-[20px] mx-auto  flex justify-center items-center py-2">
            Register Now
          </HashLink>
           </button>
           
         
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
