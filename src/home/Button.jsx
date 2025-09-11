import React from "react";
import { useNavigate } from "react-router-dom";
import { go, graph } from "../assets";

const Button = () => {
  const navigate = useNavigate(); // hook for navigation

  const handleClick = () => {
    navigate("/pages"); // navigate to the dashboard home
  };

  return (
    <div
      onClick={handleClick}
      className="w-[19vw] rounded-[14px] bluish py-4 px-4 shadow-2xl 
                 cursor-pointer hover:bg-purple-800 transition"
    >
      <div className="flex flex-row gap-5">
        <h1 className="p-2 text-white aeon-bold">Get Started With Us</h1>
        <div className="bg-white w-8 h-8 mt-1 rounded-full"><img src={go} className="p-2" /></div>
        
      </div>
    </div>
  );
};

export default Button;
