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
  FaUser,
  FaSignOutAlt,
  FaChevronDown,
} from "react-icons/fa";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  type Variants,
} from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const navItems = [
  { name: "Home", icon: <FaHome />, link: "/" },
  { name: "Products & Service", icon: <FaBoxOpen />, link: "#products" },
  { name: "About", icon: <FaInfoCircle />, link: "#about" },
  { name: "Contact", icon: <FaPhoneAlt />, link: "#contact" },
];

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
    scale: 1.05,
    transition: { duration: 0.25, ease: "easeOut" },
  },
  tap: { scale: 0.95 },
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
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [userDropdown, setUserDropdown] = useState(false);

  // 🔹 Authentication state checking
 interface UserType {
  name: string;
  email: string;
}

// State ko explicitly type do
const [user, setUser] = useState<UserType | null>(() => {
  try {
    const savedUser = localStorage.getItem("user");
    return savedUser ? (JSON.parse(savedUser) as UserType) : null;
  } catch {
    localStorage.removeItem("user");
    return null;
  }
});

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setUserDropdown(false);
    navigate("/");
  };

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 10);
  });

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;

      for (const item of navItems) {
        const sectionId = item.link.replace("#", "");

        if (!sectionId || sectionId === "/") {
          if (scrollPos < 200) {
            setActiveSection("Home");
            break;
          }
          continue;
        }

        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(item.name);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setUserDropdown(false);
  };

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
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2.5 cursor-pointer group">
          <motion.div
            className="relative w-12 h-12 rounded-xl bg-white border border-green-100 flex items-center justify-center shadow-sm overflow-hidden"
            whileHover={{ rotate: [0, -5, 5, -5, 0] }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/img/1 (1).png"
              alt="AushadhiWalah Logo"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <FaCapsules className="text-green-600 text-xl" />
          </motion.div>
          <span className="text-lg font-black text-gray-800 tracking-tight hidden xs:block">
            Aushadhi<span className="text-green-600">walah</span>
          </span>
        </Link>

        {/* DESKTOP MENU */}
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
                <motion.span
                  className={`text-xs ${
                    activeSection === item.name
                      ? "text-green-600"
                      : "text-green-500"
                  }`}
                  animate={
                    activeSection === item.name
                      ? { scale: [1, 1.2, 1], rotate: [0, -10, 10, 0] }
                      : {}
                  }
                  transition={{ duration: 0.4 }}
                >
                  {item.icon}
                </motion.span>

                {item.name}

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

        {/* 🛍️ EXPLORE BUTTON + 👤 LOGIN / PROFILE BUTTON (DESKTOP) */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Explore Button */}
          <Link to="/category/All" className="relative overflow-hidden">
            <motion.button
              variants={magneticHover}
              initial="rest"
              animate="rest"
              whileHover="hover"
              whileTap="tap"
              className="relative flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-lg shadow-green-500/25 overflow-hidden"
            >
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
            </motion.button>
          </Link>

          {/* Login or User Profile Dropdown */}
          {user ? (
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setUserDropdown(!userDropdown)}
                className="flex items-center gap-2.5 bg-green-50 hover:bg-green-100/70 border border-green-200 px-3.5 py-2 rounded-xl text-sm font-bold text-green-800 transition"
              >
                <div className="w-7 h-7 rounded-lg bg-green-600 text-white flex items-center justify-center text-xs font-bold uppercase shadow-sm">
                  {user.name ? user.name.charAt(0) : "U"}
                </div>
                <span className="max-w-[100px] truncate">{user.name || "Account"}</span>
                <FaChevronDown
                  className={`text-[10px] text-green-600 transition-transform duration-300 ${
                    userDropdown ? "rotate-180" : ""
                  }`}
                />
              </motion.button>

              <AnimatePresence>
                {userDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-green-100 p-2 z-50"
                  >
                    <div className="px-3 py-2 border-b border-gray-100">
                      <p className="text-[11px] text-gray-400 font-medium uppercase">
                        Signed in as
                      </p>
                      <p className="text-xs font-bold text-gray-800 truncate">
                        {user.email}
                      </p>
                    </div>

                    <button
                      onClick={handleLogout}
                      className="w-full mt-1 flex items-center gap-2 px-3 py-2 text-xs font-semibold text-red-600 hover:bg-red-50 rounded-xl transition duration-150"
                    >
                      <FaSignOutAlt />
                      <span>Log Out</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link to="/auth">
              <motion.button
                variants={magneticHover}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className="flex items-center gap-2 bg-white border border-green-200 hover:bg-green-50 text-green-700 px-4 py-2.5 rounded-xl font-bold text-sm shadow-sm transition duration-300"
              >
                <FaUser className="text-xs text-green-600" />
                <span>Login</span>
              </motion.button>
            </Link>
          )}
        </div>

        {/* 📱 MOBILE HAMBURGER BUTTON */}
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="lg:hidden relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-green-100 to-emerald-50 flex items-center justify-center text-green-700 text-base shadow-sm border border-green-200/50 overflow-hidden"
        >
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

      {/* 📱 MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="lg:hidden fixed inset-0 top-[60px] bg-black/10 backdrop-blur-sm z-40"
            />

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
              <div className="h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400" />

              <div className="px-4 pt-4 pb-6 flex flex-col gap-2">
                {/* User Mobile Card or Login Button */}
                {user ? (
                  <div className="flex items-center justify-between p-3 bg-green-50/80 rounded-xl border border-green-100 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-green-600 text-white flex items-center justify-center font-bold text-xs">
                        {user.name ? user.name.charAt(0) : "U"}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-800">
                          {user.name}
                        </p>
                        <p className="text-[10px] text-gray-400 truncate max-w-[170px]">
                          {user.email}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg text-sm"
                      title="Log Out"
                    >
                      <FaSignOutAlt />
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/auth"
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-green-200 text-green-700 font-bold rounded-xl text-sm shadow-sm hover:bg-green-50 transition mb-2"
                  >
                    <FaUser className="text-xs" />
                    <span>Login / Register</span>
                  </Link>
                )}

                {/* Nav Links */}
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

                      <motion.svg
                        className="w-4 h-4 text-gray-300 group-hover:text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </motion.svg>

                      {activeSection === item.name && (
                        <motion.div
                          className="absolute left-2 w-1.5 h-1.5 bg-green-500 rounded-full"
                          layoutId="activeMobileDot"
                        />
                      )}
                    </motion.a>
                  ))}
                </motion.div>

                <div className="h-px bg-gradient-to-r from-transparent via-green-200 to-transparent my-2" />

                {/* Explore Button Mobile */}
                <Link
                  to="/category/All"
                  onClick={closeMenu}
                  className="relative overflow-hidden flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-500 text-white py-3.5 rounded-xl font-semibold shadow-lg shadow-green-500/30 text-sm"
                >
                  <FaCapsules className="relative z-10" />
                  <span className="relative z-10">Explore Products</span>
                  <FaArrowRight className="w-4 h-4 relative z-10" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;