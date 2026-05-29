import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa";

const quickLinks = ["Home", "Products", "Services", "About", "Contact"];
const services = ["Healthcare", "Wellness", "Skincare", "Medical Support", "Pharmacy Products"];
const legal = ["Privacy Policy", "Terms & Conditions", "Support", "Disclaimer", "Help Center"];
const socialIcons = [FaFacebookF, FaInstagram, FaLinkedinIn];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#062b16] via-[#041f11] to-black text-white pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8">

      {/* BG GLOW */}
      <div className="absolute top-0 left-0 w-[320px] h-[320px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[260px] h-[260px] bg-green-400/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* TOP GRID */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 pb-10 sm:pb-14 border-b border-white/10">

          {/* LOGO + ABOUT — full width on mobile */}
          <div className="col-span-2 lg:col-span-1">

            {/* LOGO */}
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.05 }}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-xl sm:text-2xl font-black shadow-[0_8px_30px_rgba(34,197,94,0.4)] shrink-0"
              >
                P
              </motion.div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black">PharmaCare</h2>
                <p className="text-green-300 text-xs sm:text-sm">Healthcare Platform</p>
              </div>
            </div>

            {/* DESC */}
            <p className="text-gray-300 leading-relaxed text-sm mb-5 sm:mb-6 max-w-xs">
              Premium pharmacy and wellness platform providing trusted
              healthcare, skincare, and wellness products with modern
              service experiences.
            </p>

            {/* SOCIALS */}
            <div className="flex items-center gap-3">
              {socialIcons.map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-sm sm:text-base cursor-pointer hover:bg-green-500 transition duration-300"
                >
                  <Icon />
                </motion.div>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-green-400 cursor-pointer transition duration-300 w-fit text-sm"
                >
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-white">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-green-400 cursor-pointer transition duration-300 w-fit text-sm"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-white">
              Legal
            </h3>
            <ul className="space-y-3">
              {legal.map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-green-400 cursor-pointer transition duration-300 w-fit text-sm"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* COPYRIGHT */}
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left order-2 sm:order-1">
            © 2026 PharmaCare. All Rights Reserved.
          </p>

          {/* MADE BY */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="px-4 py-2 sm:px-5 sm:py-3 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 backdrop-blur-xl order-3 sm:order-2"
          >
            Made With ❤️ By
            <span className="text-green-400 font-semibold"> Sylect Us</span>
          </motion.div>

          {/* SCROLL TOP */}
          <motion.a
            href="#home"
            whileHover={{ y: -5, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center shadow-[0_8px_30px_rgba(34,197,94,0.4)] cursor-pointer order-1 sm:order-3"
          >
            <FaArrowUp className="text-base sm:text-xl" />
          </motion.a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;