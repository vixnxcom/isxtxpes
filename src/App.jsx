import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Pages from "./pages/Pages";
             // dashboard (sidebar + routes)

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing page */}
        <Route path="/" element={<Home />} />

        {/* Dashboard with nested routes */}
        <Route path="/pages/*" element={<Pages />} />
      </Routes>
    </Router>
  );
}

export default App;
