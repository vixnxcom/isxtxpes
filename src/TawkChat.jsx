import React from "react";
import TawkToChat from "./components/TawkToChat";

function App() {
  return (
    <div className="relative">
      <h1 className="text-center text-3xl font-bold mt-10">Welcome to My Website</h1>
      <TawkToChat /> {/* This loads the chat widget */}
    </div>
  );
}

export default App;
