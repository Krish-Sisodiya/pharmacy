import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { motion } from "framer-motion";

const socialIcons = [
  { icon: <FaFacebookF />, label: "Facebook", rotate: 5 },
  { icon: <FaInstagram />, label: "Instagram", rotate: -5 },
  { icon: <FaLinkedinIn />, label: "LinkedIn", rotate: 5 },
];

const TopHeader = () => {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden bg-gradient-to-r from-green-800 via-green-700 to-green-600 text-white shadow-md"
    >
      {/* GLOW */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-green-300/20 blur-3xl rounded-full pointer-events-none" />

      <div className="container-custom relative z-10 px-4 py-2 flex items-center justify-between gap-2">

        {/* LEFT — EMAIL + PHONE */}
        <div className="flex items-center gap-2">

          {/* EMAIL */}
          <motion.a
            href="mailto:pharmacy@gmail.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 px-2.5 py-1.5 rounded-full backdrop-blur-md border border-white/10 transition duration-300"
          >
            <FaEnvelope className="text-[10px] shrink-0" />
            <span className="text-[10px] sm:text-xs font-medium tracking-wide hidden xs:block">
              pharmacy@gmail.com
            </span>
            {/* Mobile — icon only */}
            <span className="text-[10px] font-medium xs:hidden">
              Email
            </span>
          </motion.a>

          {/* PHONE */}
          <motion.a
            href="tel:+919999999999"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 px-2.5 py-1.5 rounded-full backdrop-blur-md border border-white/10 transition duration-300"
          >
            <FaPhoneAlt className="text-[10px] shrink-0" />
            <span className="text-[10px] sm:text-xs font-medium tracking-wide">
              +91 9999999999
            </span>
          </motion.a>

        </div>

        {/* RIGHT — SOCIAL ICONS */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {socialIcons.map((social) => (
            <motion.div
              key={social.label}
              whileHover={{ scale: 1.15, rotate: social.rotate }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.label}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white hover:text-green-700 transition duration-300 text-[11px] sm:text-sm"
            >
              {social.icon}
            </motion.div>
          ))}
        </div>

      </div>

      {/* BOTTOM BORDER */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
    </motion.div>
  );
};

export default TopHeader;