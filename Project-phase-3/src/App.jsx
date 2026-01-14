import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import "./App.css";
import Navbar from "./components/navbar";
import Sales from "./pages/sales";
import Attendance from "./pages/attendance";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/sales" element={<Sales />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
