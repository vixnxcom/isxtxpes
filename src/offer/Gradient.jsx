import { useState, useEffect } from "react";

export default function Gradient({ children }) {
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
        background: `linear-gradient(180deg, #ff0096 
        ${scrollPercentage}%,
         #00ccff 50%,
          hsl(39, 100.00%, 50.00%) 100%)`,
      }}
    >
      {children}
    </div>
  );
}
