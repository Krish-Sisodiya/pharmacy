import { motion, type Variants } from "framer-motion";

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
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
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
    size: Math.random() * 60 + 20, // 20px to 80px
    left: Math.random() * 100, // 0% to 100%
    delay: Math.random() * 5, // 0s to 5s
    duration: Math.random() * 4 + 6, // 6s to 10s
  }));
};

const bubbles = generateBubbles(12);

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#062b16] via-[#041f11] to-black text-white pt-12 sm:pt-16 lg:pt-20 pb-8">

      {/* BG GLOW */}
      <div className="absolute top-0 left-0 w-[320px] h-[320px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[260px] h-[260px] bg-green-400/10 blur-[100px] rounded-full pointer-events-none" />

      {/* ✨ FLOATING BUBBLES ANIMATION */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 pb-12 border-b border-white/10">

          {/* COMPANY INFO */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div
                className="
                w-14 h-14
                rounded-2xl
                bg-gradient-to-br
                from-green-500
                to-green-700
                flex items-center justify-center
                text-2xl font-black
                shadow-lg
              "
              >
                P
              </div>
              <div>
                <h2 className="text-2xl font-black">
                  PharmaCare
                </h2>
                <p className="text-green-300 text-sm">
                  Healthcare Platform
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Premium pharmacy and wellness platform providing trusted
              healthcare products, skincare solutions and wellness
              essentials with reliable customer support.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-bold mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li
                  key={item}
                  className="text-gray-400 hover:text-green-400 transition duration-300"
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
            <h3 className="text-lg font-bold mb-5">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaPhoneAlt className="text-green-400 mt-1" />
                <span className="text-gray-400 text-sm">
                  +91 99999 99999
                </span>
              </div>
              <div className="flex items-start gap-3">
                <FaEnvelope className="text-green-400 mt-1" />
                <span className="text-gray-400 text-sm">
                  pharmacy@gmail.com
                </span>
              </div>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-green-400 mt-1" />
                <span className="text-gray-400 text-sm">
                  Raipur, Chhattisgarh, India
                </span>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-3 mt-6">
              {socialIcons.map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    w-10 h-10
                    rounded-xl
                    bg-white/10
                    border border-white/10
                    flex items-center justify-center
                    cursor-pointer
                    hover:bg-green-500
                    transition duration-300
                  "
                >
                  <Icon />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 PharmaCare. All Rights Reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Designed & Developed by
            <span className="text-green-400 font-medium">
              {" "}Sylect Us
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;