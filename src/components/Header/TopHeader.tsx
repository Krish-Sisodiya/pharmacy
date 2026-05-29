import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa";
import { motion, useScroll, useMotionValueEvent, useAnimation, AnimatePresence, type Variants } from "framer-motion";
import { useState } from "react";

const socialIcons = [
  { 
    icon: <FaFacebookF />, 
    label: "Facebook", 
    rotate: 5,
    color: "hover:text-[#1877F2]",
    gradient: "from-[#1877F2]/20 to-[#42b72a]/20"
  },
  { 
    icon: <FaInstagram />, 
    label: "Instagram", 
    rotate: -5,
    color: "hover:text-[#E4405F]",
    gradient: "from-[#E4405F]/20 to-[#833AB4]/20"
  },
  { 
    icon: <FaLinkedinIn />, 
    label: "LinkedIn", 
    rotate: 5,
    color: "hover:text-[#0A66C2]",
    gradient: "from-[#0A66C2]/20 to-[#0077B5]/20"
  },
];

// Animation variants for staggered entrance
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

// ✅ FIXED: Added custom parameter handling (optional, but safe)
const itemVariants: Variants = {
  hidden: { opacity: 0, y: -10, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 18,
      mass: 0.3,
    },
  },
};

const socialVariants: Variants = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.2,
    rotate: [0, -8, 8, -8, 0],
    transition: {
      duration: 0.4,
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: { scale: 0.9, rotate: 0 },
};


// ✅ Optional: Use floatVariants jaha needed ho, ya remove kardo

const TopHeader = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollY } = useScroll();
  const controls = useAnimation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowScrollTop(latest > 200);
    const progress = Math.min(latest / 500, 1);
    controls.start({
      backgroundPosition: `${50 + progress * 20}% 50%`,
    });
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ y: -60, opacity: 0, filter: "blur(10px)" }}
      animate={{ 
        y: 0, 
        opacity: 1, 
        filter: "blur(0px)",
      }}
      transition={{ 
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      className="relative overflow-hidden bg-gradient-to-r from-green-900 via-green-800 to-emerald-700 text-white shadow-lg"
    >
      {/* ✨ Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 100%" }}
      />

      {/* 🌟 Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-white/30 rounded-full"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      {/* 💫 Glow Orbs */}
      <motion.div
        className="absolute top-0 left-10 w-24 h-24 bg-green-400/20 blur-3xl rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-10 w-32 h-32 bg-emerald-300/20 blur-3xl rounded-full"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container-custom relative z-10 px-4 py-2 flex items-center justify-between gap-2">

        {/* 📧 LEFT — EMAIL + PHONE */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-2"
        >
          
          {/* EMAIL */}
          <motion.a
            variants={itemVariants}
            href="mailto:pharmacy@gmail.com"
            whileHover={{ scale: 1.05, x: 2 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setIsHovered("email")}
            onHoverEnd={() => setIsHovered(null)}
            className="group relative flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10 transition-all duration-300 overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
            
            <motion.span
              className="relative flex items-center justify-center w-5 h-5 rounded-full bg-white/20 text-[10px]"
              animate={isHovered === "email" ? {
                scale: [1, 1.2, 1],
                rotate: [0, -10, 10, 0],
              } : {}}
              transition={{ duration: 0.4 }}
            >
              <FaEnvelope />
            </motion.span>
            
            <span className="text-[10px] sm:text-xs font-medium tracking-wide hidden xs:block relative z-10">
              pharmacy@gmail.com
            </span>
            <span className="text-[10px] font-medium xs:hidden relative z-10">
              Email
            </span>
            
            <motion.span
              className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/90 text-white text-[10px] rounded whitespace-nowrap opacity-0 pointer-events-none"
              whileHover={{ opacity: 1, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Send us a message
            </motion.span>
          </motion.a>

          {/* PHONE */}
          <motion.a
            variants={itemVariants}
            href="tel:9999999999"
            whileHover={{ scale: 1.05, x: 2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10 transition-all duration-300 overflow-hidden"
          >
            <motion.span
              className="absolute inset-0 rounded-full border border-white/30"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <motion.span
              className="relative flex items-center justify-center w-5 h-5 rounded-full bg-green-500/30 text-[10px]"
              whileHover={{ rotate: [0, -15, 15, -15, 0] }}
              transition={{ duration: 0.5 }}
            >
              <FaPhoneAlt />
            </motion.span>
            
            <span className="text-[10px] sm:text-xs font-medium tracking-wide relative z-10">
              +91 9999999999
            </span>
            
            <motion.div
              className="flex gap-0.5"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.span
                  key={i}
                  className="w-1 h-1 bg-green-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </motion.a>

        </motion.div>

        {/* 🌐 RIGHT — SOCIAL ICONS ✅ FIXED */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-1.5 sm:gap-2"
        >
          {socialIcons.map((social) => (
            <motion.div
              key={social.label}
              // ✅ FIXED: Removed unused custom prop ya phir variants mein handle karo
              variants={socialVariants}
              initial="rest"        // ✅ Base state define kiya
              animate="rest"        // ✅ Animate prop add kiya
              whileHover="hover"    // ✅ String-based variant ab safely kaam karega
              whileTap="tap"
              onHoverStart={() => setIsHovered(social.label.toLowerCase())}
              onHoverEnd={() => setIsHovered(null)}
              aria-label={social.label}
              className={`relative group w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center cursor-pointer transition-all duration-300 text-[11px] sm:text-sm overflow-hidden ${social.color}`}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${social.gradient}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* ✅ Icon with proper variants */}
              <motion.span variants={socialVariants} className="relative z-10">
                {social.icon}
              </motion.span>
              
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-white/50"
                initial={{ scale: 0, opacity: 0.5 }}
                whileHover={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
              
              <motion.span
                className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/90 text-white text-[10px] rounded whitespace-nowrap opacity-0 pointer-events-none z-20"
                whileHover={{ opacity: 1, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {social.label}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* ✨ Animated Bottom Border */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-px"
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <div className="w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent">
          <motion.div
            className="h-full w-20 bg-gradient-to-r from-transparent via-white to-transparent"
            animate={{ x: ["-100%", "500%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>

      {/* 🚀 Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 z-50 w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-emerald-500 text-white shadow-lg shadow-green-500/30 flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaArrowUp className="text-sm" />
            </motion.div>
            
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-white/50"
              animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>
        )}
      </AnimatePresence>

    </motion.div>
  );
};

export default TopHeader;