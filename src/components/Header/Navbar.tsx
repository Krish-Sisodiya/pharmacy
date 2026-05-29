import { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaCapsules,
  FaHome,
  FaBoxOpen,
  FaInfoCircle,
  FaPhoneAlt,
  FaArrowRight,
} from "react-icons/fa";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  type Variants,
} from "framer-motion";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", icon: <FaHome />, link: "/" },
  { name: "Products & Service", icon: <FaBoxOpen />, link: "#products" },
  { name: "About", icon: <FaInfoCircle />, link: "#about" },
  { name: "Contact", icon: <FaPhoneAlt />, link: "#contact" },
];

// Animation variants for staggered effects
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const magneticHover: Variants = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.08,
    rotate: [-1, 1, -1, 0],
    transition: { duration: 0.3, ease: "easeOut" },
  },
  tap: { scale: 0.95, rotate: 0 },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -12, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 18,
    },
  },
};

const linkHoverVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 400, damping: 15 },
  },
  tap: { scale: 0.97 },
};

const mobileItemVariants = {
  hidden: { opacity: 0, x: -20, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      delay: i * 0.07,
      type: "spring",
      stiffness: 180,
      damping: 20,
    },
  }),
} satisfies Variants;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const { scrollY } = useScroll();

  // Scroll-based navbar effects
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 10);
  });

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Track active section for highlight
  useEffect(() => {
  const handleScroll = () => {
    const scrollPos = window.scrollY + 100;

    // ✅ Direct navItems pe loop chalao, taaki 'item' available rahe
    for (const item of navItems) {
      // Link se '#' hata kar section ID nikalo
      const sectionId = item.link.replace("#", "");
      
      // Agar sectionId empty hai (jaise "/" for Home), toh special handling
      if (!sectionId || sectionId === "/") {
        if (scrollPos < 200) { // Top section maan lo
          setActiveSection("Home");
          break;
        }
        continue;
      }

      const element = document.getElementById(sectionId);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
          // ✅ Ab 'item' available hai, toh item.name use kar sakte ho!
          setActiveSection(item.name);
          break;
        }
      }
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []); // ✅ Dependencies empty rakh sakte ho kyunki navItems constant hais

  const closeMenu = () => setMenuOpen(false);

  // Magnetic hover effect helper

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        boxShadow: scrolled
          ? "0 4px 30px rgba(22, 163, 74, 0.15)"
          : "0 2px 10px rgba(0, 0, 0, 0.05)",
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.5,
      }}
      className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-all duration-500 ${
        scrolled
          ? "bg-white/95 border-green-200/50 shadow-lg shadow-green-500/5"
          : "bg-white/80 border-transparent"
      }`}
    >
      {/* Animated gradient border on scroll */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px]"
        style={{
          background: scrolled
            ? "linear-gradient(90deg, transparent, #16a34a, transparent)"
            : "transparent",
        }}
        animate={{
          opacity: scrolled ? 1 : 0,
          scaleX: scrolled ? 1 : 0,
        }}
        transition={{ duration: 0.4 }}
      />

      <div className="container-custom px-4 sm:px-5 py-3 flex justify-between items-center relative z-10">
        {/* ✨ LOGO WITH ANIMATIONS */}
        <motion.a
          href="#home"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          {/* Animated Logo Icon */}
          <motion.div
            className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-white text-lg shadow-lg shrink-0 overflow-hidden"
            whileHover={{ rotate: [0, -5, 5, -5, 0] }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 bg-gradient-to-r from-green-400/30 to-emerald-300/30 blur-md"
            />
            <FaCapsules className="relative z-10" />

            {/* Pulse ring effect */}
            <motion.div
              className="absolute inset-0 rounded-xl border-2 border-green-300/50"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Logo Text with gradient animation */}
          <div className="leading-tight overflow-hidden">
            <motion.h1
              className="text-lg sm:text-xl font-black tracking-wide"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-green-700">Pharma</span>
              <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                Care
              </span>
            </motion.h1>
            <motion.p
              className="text-[9px] sm:text-[10px] text-gray-400 font-semibold tracking-widest uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Healthcare Store
            </motion.p>
          </div>
        </motion.a>

        {/* 🖥️ DESKTOP MENU WITH HOVER ANIMATIONS */}
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hidden lg:flex items-center gap-1"
        >
          {navItems.map((item, index) => (
            <motion.li key={index} variants={itemVariants}>
              <motion.a
                href={item.link}
                variants={linkHoverVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => setActiveSection(item.name)}
                className={`group relative flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeSection === item.name
                    ? "text-green-700 bg-green-50"
                    : "text-gray-600 hover:text-green-700 hover:bg-green-50/80"
                }`}
              >
                {/* Animated Icon */}
                <motion.span
                  className={`text-xs ${activeSection === item.name ? "text-green-600" : "text-green-500"}`}
                  animate={
                    activeSection === item.name
                      ? {
                          scale: [1, 1.2, 1],
                          rotate: [0, -10, 10, 0],
                        }
                      : {}
                  }
                  transition={{ duration: 0.4 }}
                >
                  {item.icon}
                </motion.span>

                {item.name}

                {/* Animated underline with glow */}
                <motion.span
                  className="absolute bottom-1.5 left-1/2 h-[2px] bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
                  initial={{ width: 0, x: "-50%", opacity: 0 }}
                  whileHover={{
                    width: "80%",
                    opacity: 1,
                    boxShadow: "0 0 10px rgba(34, 197, 94, 0.5)",
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Subtle glow on active */}
                {activeSection === item.name && (
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-green-500/5"
                    layoutId="activeNav"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>

        {/* 🛍️ EXPLORE BUTTON WITH MAGNETIC EFFECT */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="hidden lg:block"
        >
          <Link to="/category/All" className="relative overflow-hidden">
            <motion.button
              variants={magneticHover}
              initial="rest"
              animate="rest" 
              whileHover="hover"
              whileTap="tap"
              className="relative flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-lg shadow-green-500/25 overflow-hidden"
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-500 via-emerald-400 to-green-500"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
              />

              <FaCapsules className="relative z-10" />
              <span className="relative z-10">Explore Products</span>
              <motion.span
                className="relative z-10"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaArrowRight className="w-3.5 h-3.5" />
              </motion.span>

              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </Link>
        </motion.div>

        {/* 📱 MOBILE HAMBURGER WITH ANIMATED ICON */}
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="lg:hidden relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-green-100 to-emerald-50 flex items-center justify-center text-green-700 text-base shadow-sm border border-green-200/50 overflow-hidden"
        >
          {/* Animated background pulse */}
          <motion.div
            className="absolute inset-0 bg-green-200/30 rounded-xl"
            animate={{
              scale: menuOpen ? [1, 1.2, 1] : 1,
              opacity: menuOpen ? [0.3, 0.5, 0.3] : 0,
            }}
            transition={{ duration: 0.3 }}
          />

          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <FaTimes className="w-5 h-5" />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <FaBars className="w-5 h-5" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* 📱 MOBILE MENU - SLIDE DOWN WITH STAGGERED ITEMS */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="lg:hidden fixed inset-0 top-[60px] bg-black/10 backdrop-blur-sm z-40"
            />

            {/* Menu Panel with spring animation */}
            <motion.div
              initial={{ opacity: 0, y: -15, scaleY: 0.95 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: -15, scaleY: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
                mass: 0.8,
              }}
              className="lg:hidden absolute w-full bg-white/95 backdrop-blur-xl border-t border-green-100 shadow-2xl shadow-green-500/10 z-50 overflow-hidden"
            >
              {/* Decorative gradient top border */}
              <div className="h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400" />

              <div className="px-4 pt-4 pb-6 flex flex-col gap-2">
                {/* NAV LINKS with staggered entrance */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col gap-1.5"
                >
                  {navItems.map((item, index) => (
                    <motion.a
                      key={index}
                      custom={index}
                      variants={mobileItemVariants}
                      href={item.link}
                      onClick={closeMenu}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 font-medium text-sm group ${
                        activeSection === item.name
                          ? "bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-700 border border-green-200/50"
                          : "bg-gray-50/80 hover:bg-green-50 hover:text-green-700 text-gray-700"
                      }`}
                    >
                      {/* Animated Icon Container */}
                      <motion.span
                        className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm shrink-0 transition-colors ${
                          activeSection === item.name
                            ? "bg-green-500 text-white"
                            : "bg-green-100 text-green-600 group-hover:bg-green-200"
                        }`}
                        whileHover={{ scale: 1.1, rotate: [-3, 3, -3, 0] }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.icon}
                      </motion.span>

                      <span className="flex-1">{item.name}</span>

                      {/* Animated Arrow */}
                      <motion.svg
                        className="w-4 h-4 text-gray-300 group-hover:text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </motion.svg>

                      {/* Active indicator dot */}
                      {activeSection === item.name && (
                        <motion.div
                          className="absolute left-2 w-1.5 h-1.5 bg-green-500 rounded-full"
                          layoutId="activeMobileDot"
                        />
                      )}
                    </motion.a>
                  ))}
                </motion.div>

                {/* Decorative Divider with animation */}
                <motion.div
                  className="h-px bg-gradient-to-r from-transparent via-green-200 to-transparent my-2"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                />

                {/* CTA BUTTON with pulse animation */}
                <motion.a
                  href="#products"
                  onClick={closeMenu}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, type: "spring", stiffness: 200 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative overflow-hidden flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-500 text-white py-3.5 rounded-xl font-semibold shadow-lg shadow-green-500/30 text-sm group"
                >
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-green-500 via-emerald-400 to-green-500"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{ backgroundSize: "200% 200%" }}
                  />

                  <motion.span
                    animate={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaCapsules className="relative z-10" />
                  </motion.span>
                  <span className="relative z-10">Explore Products</span>
                  <motion.span
                    className="relative z-10"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: 0.5 }}
                  >
                    <FaArrowRight className="w-4 h-4" />
                  </motion.span>

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.a>
              </div>

              {/* Decorative bottom glow */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-green-100/50 to-transparent pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
