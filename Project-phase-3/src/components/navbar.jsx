import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/attendance", label: "Attendance" },
    { to: "/sales", label: "Sales" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            OMS
          </div>
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
          <ul
            className={`${
              isOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row gap-4 md:gap-8 absolute md:static top-16 left-0 right-0 bg-slate-900/95 md:bg-transparent p-6 md:p-0 transition-all duration-300`}
          >
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className={`relative px-3 py-2 font-semibold transition duration-300 ${
                      isActive
                        ? "text-cyan-400"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full"></span>
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
