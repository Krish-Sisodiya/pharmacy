import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <>
      {/* 🔔 Notification Dot (Optional - remove if not needed) */}
      <motion.div
        className="fixed bottom-6 right-6 z-40"
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2, delay: 1 }}
      >
        <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg" />
      </motion.div>

      {/* 💬 Main WhatsApp Button */}
      <motion.a
        href="https://wa.me/917389812435"
        target="_blank"
        rel="noopener noreferrer"
        
        // 🎯 Float animation (subtle up-down)
        animate={{ y: [0, -6, 0] }}
        transition={{ 
          duration: 2.5, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        
        // 🖱️ Hover effects
        whileHover={{ 
          scale: 1.15, 
          rotate: 360,
          boxShadow: "0 0 30px rgba(34, 197, 94, 0.6)"
        }}
        whileTap={{ scale: 0.95 }}
        
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white text-3xl shadow-2xl cursor-pointer"
      >
        {/* 💓 Pulse Ring Animation */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-green-400"
          animate={{ 
            scale: [1, 1.6, 2],
            opacity: [0.8, 0.4, 0],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeOut" 
          }}
        />
        
        {/* Second pulse ring for extra effect */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-green-300"
          animate={{ 
            scale: [1, 1.8, 2.4],
            opacity: [0.6, 0.2, 0],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeOut",
            delay: 0.5 
          }}
        />
        
        {/* WhatsApp Icon */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="relative z-10"
        >
          <FaWhatsapp />
        </motion.div>
      </motion.a>
    </>
  );
};

export default WhatsAppButton;