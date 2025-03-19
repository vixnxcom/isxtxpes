import { useState, useEffect } from "react";

export default function GradientBackground({ children }) {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 150;
      setScrollPercentage(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="min-h-screen transition-all duration-500 ease-in-out"
      style={{
        background: `linear-gradient(180deg, 
          #d88b02 0%, 
rgb(226, 153, 17) ${Math.min(25, scrollPercentage * 0.8)}%,  
          #e0bb41 ${Math.min(40, scrollPercentage * 1.0)}%, 
          #826030 ${Math.min(50, scrollPercentage * 1.2)}%, /* New transition shade */
          #01043a ${Math.min(65, scrollPercentage * 1.5)}%, 
          #010D1B 100%)`,
      }}
    >
      {children}
    </div>
  );
}
