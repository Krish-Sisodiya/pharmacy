import { motion, type Variants } from "framer-motion";
import logo from "../../../public/img/1 (1).png";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const quickLinks = [
  "Home",
  "Products",
  "About",
  "Contact",
];

const socialIcons = [
  {
    icon: FaFacebookF,
    url: "https://www.facebook.com/share/1Bxnsrkg85/?mibextid=wwXIfr",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/aushadhiwalah?stkn=eDE1NTB0cWNoZ2lm",
    label: "Instagram",
  },
  {
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/company/aushadhi-walah/",
    label: "LinkedIn",
  },
];

// Bubble animation variants
const bubbleVariants: Variants = {
  float: {
    y: ["100%", "-100%"],
    opacity: [0, 0.6, 0],
    scale: [0, 1, 0.5],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// Generate random bubble data
const generateBubbles = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 20,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 4 + 6,
  }));
};

const bubbles = generateBubbles(12);

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#03140a] text-white pt-12 sm:pt-16 lg:pt-20 pb-8">

      {/* 🌿 MOBILE & DESKTOP AUTO-FIT BACKGROUND IMAGE */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <img
          src="/img/Footer.png"
          alt="Organic Herbal Background"
          className="w-full h-full object-cover object-center opacity-45 select-none"
          loading="lazy"
        />
      </div>

      {/* 🌑 DARK GREEN TO BLACK GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#062b16]/10 via-[#041f11]/50 to-black pointer-events-none z-[1]" />

      {/* BG GLOW */}
      <div className="absolute top-0 left-0 w-[240px] sm:w-[320px] h-[240px] sm:h-[320px] bg-green-500/15 blur-[90px] sm:blur-[120px] rounded-full pointer-events-none z-[1]" />
      <div className="absolute bottom-0 right-0 w-[200px] sm:w-[260px] h-[200px] sm:h-[260px] bg-emerald-400/10 blur-[80px] sm:blur-[100px] rounded-full pointer-events-none z-[1]" />

      {/* ✨ FLOATING BUBBLES ANIMATION */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[2]">
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            variants={bubbleVariants}
            animate="float"
            initial={{ y: "100%", opacity: 0 }}
            style={{
              position: "absolute",
              left: `${bubble.left}%`,
              bottom: 0,
              width: bubble.size,
              height: bubble.size,
              borderRadius: "50%",
              background: "radial-gradient(circle at 30% 30%, rgba(74, 222, 128, 0.4), rgba(22, 163, 74, 0.1))",
              boxShadow: "0 0 20px rgba(74, 222, 128, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.2)",
              border: "1px solid rgba(74, 222, 128, 0.2)",
            }}
            transition={{
              duration: bubble.duration,
              repeat: Infinity,
              ease: "linear",
              delay: bubble.delay,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-white/10">

          {/* COMPANY INFO */}
          <div>
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white flex items-center justify-center shadow-lg border border-gray-200 overflow-hidden shrink-0">
                <img
                  src={logo}
                  alt="Aushadhi Walah Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black">
                  Aushadhi Walah
                </h2>
              </div>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Premium pharmacy and wellness platform providing trusted
              healthcare products, skincare solutions and wellness
              essentials with reliable customer support.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-5 text-green-100">
              Quick Links
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {quickLinks.map((item) => (
                <li
                  key={item}
                  className="text-gray-300 hover:text-green-400 transition duration-300 text-xs sm:text-sm"
                >
                  <a href={`#${item.toLowerCase()}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-5 text-green-100">
              Contact Information
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3">
                <FaPhoneAlt className="text-green-400 mt-1 shrink-0 text-sm" />
                <a 
                  href="tel:+919691190195" 
                  className="text-gray-300 text-xs sm:text-sm hover:text-green-400 transition"
                >
                  +91 9691190195
                </a>
              </div>
              <div className="flex items-start gap-3">
                <FaEnvelope className="text-green-400 mt-1 shrink-0 text-sm" />
                <a 
                  href="mailto:aushadhiwalah@gmail.com" 
                  className="text-gray-300 text-xs sm:text-sm hover:text-green-400 transition break-all"
                >
                  aushadhiwalah@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-green-400 mt-1 shrink-0 text-sm" />
                <span className="text-gray-300 text-xs sm:text-sm">
                  Industrial Area Sanwer Road, Indore
                </span>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-2.5 sm:gap-3 mt-5 sm:mt-6">
              {socialIcons.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="
                      w-9 h-9 sm:w-10 sm:h-10
                      rounded-xl
                      bg-white/10
                      border border-white/10
                      flex items-center justify-center
                      cursor-pointer
                      hover:bg-green-500
                      hover:border-green-400
                      text-white
                      transition duration-300
                    "
                  >
                    <IconComponent className="text-sm sm:text-base" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="pt-6 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2026 Aushadhi Walah. All Rights Reserved.
          </p>
          <p className="text-gray-500 text-xs sm:text-sm mt-1.5 sm:mt-2">
            Designed & Developed by
            <span className="text-green-400 font-medium">
              {" "}Sylekt Us
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;