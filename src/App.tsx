import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<div className="text-center text-xl text-platform-text p-8">About — Coming soon</div>} />
        <Route path="/features" element={<div className="text-center text-xl text-platform-text p-8">Features — Coming soon</div>} />
        <Route path="/contact" element={<div className="text-center text-xl text-platform-text p-8">Contacts — Coming soon</div>} />
      </Routes>
    </Router>
  );
}
