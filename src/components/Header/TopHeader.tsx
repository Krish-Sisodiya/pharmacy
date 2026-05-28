import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { motion } from "framer-motion";

const TopHeader = () => {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="
      relative
      overflow-hidden
      bg-gradient-to-r
      from-green-800
      via-green-700
      to-green-600
      text-white
      text-sm
      shadow-lg
    "
    >

      {/* Glow Effect */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-green-300 opacity-20 blur-3xl rounded-full"></div>

      <div className="container-custom relative z-10 py-3 flex justify-between items-center">

        {/* LEFT SIDE */}
        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8">

          {/* Email */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="
            flex items-center gap-3
            bg-white/10
            px-4 py-2
            rounded-full
            backdrop-blur-md
            border border-white/10
          "
          >

            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <FaEnvelope className="text-green-100 text-sm" />
            </div>

            <span className="font-medium tracking-wide">
              pharmacy@gmail.com
            </span>

          </motion.div>

          {/* Phone */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="
            flex items-center gap-3
            bg-white/10
            px-4 py-2
            rounded-full
            backdrop-blur-md
            border border-white/10
          "
          >

            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <FaPhoneAlt className="text-green-100 text-sm" />
            </div>

            <span className="font-medium tracking-wide">
              +91 9999999999
            </span>

          </motion.div>

        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-4">

          {/* Facebook */}
          <motion.div
            whileHover={{
              scale: 1.15,
              rotate: 5,
            }}
            className="
            w-10 h-10
            rounded-full
            bg-white/10
            backdrop-blur-md
            border border-white/10
            flex items-center justify-center
            cursor-pointer
            hover:bg-white
            hover:text-green-700
            transition duration-300
          "
          >
            <FaFacebookF />
          </motion.div>

          {/* Instagram */}
          <motion.div
            whileHover={{
              scale: 1.15,
              rotate: -5,
            }}
            className="
            w-10 h-10
            rounded-full
            bg-white/10
            backdrop-blur-md
            border border-white/10
            flex items-center justify-center
            cursor-pointer
            hover:bg-white
            hover:text-green-700
            transition duration-300
          "
          >
            <FaInstagram />
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            whileHover={{
              scale: 1.15,
              rotate: 5,
            }}
            className="
            w-10 h-10
            rounded-full
            bg-white/10
            backdrop-blur-md
            border border-white/10
            flex items-center justify-center
            cursor-pointer
            hover:bg-white
            hover:text-green-700
            transition duration-300
          "
          >
            <FaLinkedinIn />
          </motion.div>

        </div>

      </div>

      {/* Bottom Border Glow */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

    </motion.div>
  );
};

export default TopHeader;