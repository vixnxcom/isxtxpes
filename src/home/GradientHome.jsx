import { useState, useEffect } from "react";

export default function GradientHome({ children }) {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
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
#070141  ${Math.min(60, scrollPercentage * 1.0)}%,  
 #010D1B ${Math.min(60, scrollPercentage * 1.5)}%, 
#012e5e 100%)`,
      }}
    >
      {children}
    </div>
  );
}
