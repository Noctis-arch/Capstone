import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 