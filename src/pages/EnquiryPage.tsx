import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa6";
import { products } from "../data/products";
import ProductCard from "../components/Products/ProductCard";
import AnimatedBackground from "../components/AnimatedBackground";
import { FaQuestionCircle } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const EnquiryPage = () => {
  const navigate = useNavigate();
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Specify the product IDs you want to feature here
  const featuredProductIds = useMemo(() => [7, 12, 17, 22], []);

  // Filtered featured/recommended products
  const featuredProducts = useMemo(() => {
    return products.filter((product) => featuredProductIds.includes(product.id));
  }, [featuredProductIds]);

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim()) {
      alert("Please enter your enquiry message!");
      return;
    }

    // Your WhatsApp Number with country code (without +)
    const phoneNumber = "919691190195";

    const formattedText = `🌿 *New Enquiry - Aushadhi Walah*%0A%0A*Subject/Topic:* ${
      subject.trim() ? encodeURIComponent(subject) : "General Enquiry"
    }%0A*Message:* ${encodeURIComponent(message)}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${formattedText}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="relative min-h-screen">
      {/* 🌿 ORGANIC HERBS BACKGROUND IMAGE */}
      <div
        className="fixed inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1920&auto=format&fit=crop')`,
        }}
      />

      {/* 🤍 FROSTED GLASS OVERLAY */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-white/30 via-white/80 to-white/95 backdrop-blur-[2px] shadow-[inset_0_0_120px_rgba(255,255,255,0.9)]" />

      {/* BUBBLE BACKGROUND */}
      <div className="relative z-[1]">
        <AnimatedBackground />
      </div>

      <section className="relative z-10 overflow-x-hidden min-h-screen pb-16 sm:pb-24">
        {/* BG GLOW ACCENTS */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-400/20 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-300/20 blur-[110px] rounded-full pointer-events-none" />

        <div className="container-custom relative z-10 pt-6 sm:pt-10">
          {/* BACK BUTTON */}
          <motion.button
            onClick={() => navigate(-1)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ x: -4 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-green-700 font-semibold text-sm sm:text-base mb-6 sm:mb-8 group w-fit cursor-pointer"
          >
            <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/90 backdrop-blur-md border border-green-200/60 shadow-sm flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition duration-300">
              <FaArrowLeft className="text-sm" />
            </span>
            <span className="group-hover:text-green-600 transition duration-300">
              Back
            </span>
          </motion.button>

          {/* PAGE HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-8 sm:mb-12 px-2"
          >
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-xl border border-green-200/50 px-4 py-2 rounded-full shadow-md mb-4">
              <FaQuestionCircle className="text-green-600 text-xs" />
              <span className="font-semibold text-gray-700 text-xs sm:text-sm">
                Get In Touch With Us
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight mb-3 text-gray-900 drop-shadow-sm">
              Product & Bulk
              <span className="block bg-gradient-to-r from-emerald-900 via-green-800 to-teal-900 bg-clip-text text-transparent py-1">
                Enquiry
              </span>
            </h1>

            <p className="text-gray-600 max-w-lg mx-auto leading-relaxed text-sm sm:text-base font-medium">
              Have questions about our botanical extracts, contract manufacturing, or custom bulk orders? Reach out directly via WhatsApp.
            </p>
          </motion.div>

          {/* 💬 ENQUIRY FORM BOX */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-2xl mx-auto mb-16 sm:mb-20"
          >
            <form
              onSubmit={handleWhatsAppSend}
              className="bg-white/90 backdrop-blur-xl border border-green-200/60 rounded-3xl p-6 sm:p-8 shadow-xl shadow-green-500/5"
            >
              {/* SUBJECT INPUT */}
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold text-xs sm:text-sm mb-2">
                  What would you like to enquire about?
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ashwagandha Extract, Bulk Order, Third-Party Manufacturing..."
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-white border border-green-200/70 rounded-2xl py-3 px-4 outline-none text-gray-800 text-sm focus:border-green-500 focus:ring-2 focus:ring-green-400/20 transition duration-300"
                />
              </div>

              {/* MESSAGE TEXTAREA */}
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold text-xs sm:text-sm mb-2">
                  Your Message & Requirements <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your requirements, quantity needed, or project specifications..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white border border-green-200/70 rounded-2xl p-4 outline-none text-gray-800 text-sm focus:border-green-500 focus:ring-2 focus:ring-green-400/20 transition duration-300 resize-none"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white py-3.5 sm:py-4 rounded-2xl font-bold text-sm sm:text-base shadow-lg shadow-green-600/25 cursor-pointer hover:shadow-green-600/35 transition-all duration-300"
              >
                <FaWhatsapp className="text-xl" />
                <span>Send Enquiry via WhatsApp</span>
                <FaPaperPlane className="text-xs opacity-90" />
              </motion.button>
            </form>
          </motion.div>

          {/* 🌿 FEATURED / OTHER PRODUCTS SECTION */}
          {featuredProducts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              <div className="flex items-center justify-between mb-6 px-1">
                <div>
                  <div className="flex items-center gap-1.5 text-green-700 font-semibold text-xs sm:text-sm mb-1">
                    <HiSparkles className="text-xs" />
                    <span>Recommended Extracts</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-gray-900">
                    Other Popular Products
                  </h2>
                </div>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/category/All")}
                  className="text-xs sm:text-sm font-bold text-green-700 hover:text-green-800 underline underline-offset-4 cursor-pointer"
                >
                  View All
                </motion.button>
              </div>

              {/* PRODUCTS GRID */}
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
                {featuredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default EnquiryPage;