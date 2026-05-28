import { useState } from "react";

import {
  FaBars,
  FaTimes,
  FaCapsules,
  FaHome,
  FaBoxOpen,
  FaConciergeBell,
  FaInfoCircle,
  FaPhoneAlt,
} from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      icon: <FaHome />,
      link: "#home",
    },

    {
      name: "Products",
      icon: <FaBoxOpen />,
      link: "#products",
    },

    {
      name: "Services",
      icon: <FaConciergeBell />,
      link: "#services",
    },

    {
      name: "About",
      icon: <FaInfoCircle />,
      link: "#about",
    },

    {
      name: "Contact",
      icon: <FaPhoneAlt />,
      link: "#contact",
    },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="
      sticky
      top-0
      z-50
      bg-white/70
      backdrop-blur-2xl
      border-b border-green-100
      shadow-lg
    "
    >

      <div className="container-custom py-4 flex justify-between items-center">

        {/* LOGO */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-4 cursor-pointer"
        >

          {/* Logo Circle */}
          <div
            className="
            relative
            w-14 h-14
            rounded-2xl
            bg-gradient-to-br
            from-green-500
            to-green-700
            flex items-center justify-center
            text-white
            text-2xl
            shadow-xl
          "
          >

            <FaCapsules />

            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl bg-green-400 blur-xl opacity-30"></div>

          </div>

          {/* Logo Text */}
          <div>

            <h1 className="text-3xl font-black tracking-wide">

              <span className="text-green-700">
                Pharma
              </span>

              <span className="gradient-text">
                Care
              </span>

            </h1>

            <p className="text-sm text-gray-500 font-medium tracking-wider">
              HEALTHCARE STORE
            </p>

          </div>

        </motion.div>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-3">

          {navItems.map((item, index) => (

            <motion.a
              key={index}
              href={item.link}
              whileHover={{
                y: -3,
              }}
              className="
              group
              relative
              flex items-center gap-2
              px-5 py-3
              rounded-2xl
              text-gray-700
              font-semibold
              transition duration-300
              hover:text-green-700
              hover:bg-green-50
            "
            >

              {/* Icon */}
              <span className="text-green-600 group-hover:scale-125 transition duration-300">
                {item.icon}
              </span>

              {/* Text */}
              {item.name}

              {/* Hover Border */}
              <span
                className="
                absolute
                bottom-0
                left-1/2
                w-0
                h-[3px]
                bg-green-600
                rounded-full
                transition-all duration-300
                group-hover:w-10
                group-hover:left-[35%]
              "
              ></span>

            </motion.a>

          ))}

        </ul>

        {/* RIGHT BUTTON */}
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="
          hidden lg:flex
          items-center gap-3
          bg-gradient-to-r
          from-green-600
          to-green-500
          text-white
          px-7 py-4
          rounded-2xl
          font-bold
          shadow-xl
          hover:shadow-green-300/50
          transition duration-300
        "
        >

          <FaCapsules />

          Explore Products

        </motion.button>

        {/* MOBILE ICON */}
        <motion.div
          whileTap={{ scale: 0.9 }}
          className="
          lg:hidden
          w-12 h-12
          rounded-2xl
          bg-green-100
          flex items-center justify-center
          text-green-700
          text-2xl
          cursor-pointer
        "
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >

          {menuOpen ? <FaTimes /> : <FaBars />}

        </motion.div>

      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{
              opacity: 0,
              y: -30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -30,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
            lg:hidden
            bg-white/95
            backdrop-blur-xl
            border-t border-green-100
            shadow-2xl
          "
          >

            <div className="container-custom py-6 flex flex-col gap-4">

              {navItems.map((item, index) => (

                <a
                  key={index}
                  href={item.link}
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className="
                  flex items-center gap-4
                  px-5 py-4
                  rounded-2xl
                  bg-green-50
                  hover:bg-green-100
                  transition duration-300
                  font-semibold
                  text-gray-700
                "
                >

                  <span className="text-green-600 text-lg">
                    {item.icon}
                  </span>

                  {item.name}

                </a>

              ))}

              {/* Mobile Button */}
              <button
                className="
                mt-3
                bg-gradient-to-r
                from-green-600
                to-green-500
                text-white
                py-4
                rounded-2xl
                font-bold
                shadow-lg
              "
              >
                Explore Products
              </button>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.nav>
  );
};

export default Navbar;