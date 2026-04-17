import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Kraken Lettering Logo.svg";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Shop", to: "/shop" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A1A2F]/95 backdrop-blur-md shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center "
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={logo} className="h-9 w-auto" alt="Kraken Logo" />
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ label, to }) => {
            const isActive = location.pathname === to;
            return (
              <li key={label}>
                <Link
                  to={to}
                  className={`font-montserrat text-sm font-medium tracking-widest uppercase transition-colors duration-300 ${
                    isActive
                      ? "text-sky-400"
                      : "text-gray-300 hover:text-sky-400"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          to="/shop"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="hidden md:inline-block font-montserrat text-sm font-semibold tracking-widest uppercase px-6 py-2.5 bg-sky-500 hover:bg-sky-400 text-white rounded-full transition-all duration-300"
        >
          Shop Now
        </Link>

        <button
          className="md:hidden text-white flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0A1A2F]/98 px-6 pb-6 flex flex-col gap-4">
          {links.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="font-montserrat text-sm font-medium tracking-widest text-gray-300 hover:text-sky-400 transition-colors uppercase"
            >
              {label}
            </Link>
          ))}
          <Link
            to="/shop"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-montserrat text-sm font-semibold tracking-widest uppercase px-6 py-2.5 bg-sky-500 text-white rounded-full text-center"
          >
            Shop Now
          </Link>
        </div>
      )}
    </motion.nav>
  );
}
