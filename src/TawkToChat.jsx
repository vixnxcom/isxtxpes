import { useEffect } from "react";

const TawkToChat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/67e4e88014d7621907c8c965/1inb2odkj";

    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    return () => {
      // Cleanup when component unmounts (optional)
      document.body.removeChild(script);
    };
  }, []);

  return null; // No visible UI needed
};

export default TawkToChat;
