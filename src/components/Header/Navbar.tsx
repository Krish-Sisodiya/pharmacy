import { useState, useEffect } from "react";
import {
  FaBars, FaTimes, FaCapsules,
  FaHome, FaBoxOpen, FaConciergeBell,
  FaInfoCircle, FaPhoneAlt,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home",     icon: <FaHome />,         link: "#home" },
  { name: "Products", icon: <FaBoxOpen />,       link: "#products" },
  { name: "Services", icon: <FaConciergeBell />, link: "#services" },
  { name: "About",    icon: <FaInfoCircle />,    link: "#about" },
  { name: "Contact",  icon: <FaPhoneAlt />,      link: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navbar shadow on scroll
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-green-100 transition-shadow duration-300 ${scrolled ? "shadow-lg" : "shadow-sm"}`}
    >
      <div className="container-custom px-4 sm:px-5 py-3 flex justify-between items-center">

        {/* LOGO */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2.5 cursor-pointer"
        >
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-white text-lg shadow-md shrink-0">
            <FaCapsules />
            <div className="absolute inset-0 rounded-xl bg-green-400 blur-lg opacity-25 pointer-events-none" />
          </div>
          <div className="leading-tight">
            <h1 className="text-lg sm:text-xl font-black tracking-wide">
              <span className="text-green-700">Pharma</span>
              <span className="gradient-text">Care</span>
            </h1>
            <p className="text-[9px] sm:text-[10px] text-gray-400 font-semibold tracking-widest uppercase">
              Healthcare Store
            </p>
          </div>
        </motion.a>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              whileHover={{ y: -2 }}
              className="group relative flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-gray-600 text-sm font-semibold transition duration-300 hover:text-green-700 hover:bg-green-50"
            >
              <span className="text-green-500 text-xs">{item.icon}</span>
              {item.name}
              <span className="absolute bottom-1 left-1/2 w-0 h-[2px] bg-green-500 rounded-full transition-all duration-300 group-hover:w-6 group-hover:-translate-x-1/2 group-hover:left-1/2" />
            </motion.a>
          ))}
        </ul>

        {/* DESKTOP CTA */}
        <motion.a
          href="#products"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-2.5 rounded-xl font-semibold shadow-md text-sm transition duration-300 hover:shadow-lg"
        >
          <FaCapsules />
          Explore Products
        </motion.a>

        {/* MOBILE HAMBURGER */}
        <motion.button
          whileTap={{ scale: 0.88 }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-700 text-base shadow-sm"
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaTimes />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaBars />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>

      </div>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="lg:hidden fixed inset-0 top-[53px] bg-black/20 backdrop-blur-sm z-40"
            />

            {/* MENU PANEL */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden absolute w-full bg-white border-t border-green-100 shadow-xl z-50"
            >
              <div className="px-4 pt-3 pb-5 flex flex-col gap-1.5">

                {/* NAV LINKS — staggered */}
                {navItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: index * 0.06 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 hover:bg-green-50 hover:text-green-700 active:scale-[0.98] transition duration-200 font-medium text-gray-700 text-sm"
                  >
                    <span className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600 text-sm shrink-0">
                      {item.icon}
                    </span>
                    {item.name}

                    {/* Arrow */}
                    <svg className="ml-auto w-3.5 h-3.5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.a>
                ))}

                {/* DIVIDER */}
                <div className="h-px bg-gray-100 my-1" />

                {/* CTA BUTTON */}
                <motion.a
                  href="#products"
                  onClick={closeMenu}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: 0.35 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-500 text-white py-3 rounded-xl font-semibold shadow-md text-sm"
                >
                  <FaCapsules />
                  Explore Products
                </motion.a>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;