import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameDetails from "./pages/GameDetails";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import Navbar from "./components/Navbar";
import "./App.css";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about" element={<About />} />
        <Route path="/game/:id" element={<GameDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 