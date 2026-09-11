import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaCapsules, FaArrowRight } from "react-icons/fa";
import HeroCard from "./HeroCard";
import { products } from "../../data/products";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* 🌿 ATTRACTIVE ORGANIC HERBS & ESSENTIAL EXTRACT BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none scale-105 transition-transform duration-1000"
        style={{
          // Premium herbal mortar, green leaves & natural oil extract image
          backgroundImage: `url('/img/Hero-bg.png')`,
        }}
      />

      {/* ⚪ BALANCED WHITE/MINT OVERLAY — Image visible rahegi aur text readable hoga */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-white/40 backdrop-blur-[1px] pointer-events-none" />

      {/* 🟢 AMBIENT ACCENT GLOWS */}
      <div className="absolute -top-10 left-10 w-72 h-72 bg-emerald-400/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-80 h-80 bg-green-300/20 blur-[110px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10 py-8 sm:py-12 lg:py-20 flex flex-col lg:grid lg:grid-cols-2 lg:gap-14 lg:items-center gap-0">
        {/* SLIDER — mobile: upar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full order-1 lg:order-2"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.18)] border border-white/80 backdrop-blur-sm"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <HeroCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* TEXT CONTENT — mobile: neeche */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left order-2 lg:order-1 px-2 pt-6 pb-8 lg:py-0"
        >
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 bg-white/90 border border-green-200/90 text-green-800 px-4 py-1.5 rounded-full font-bold text-xs sm:text-sm mb-4 shadow-md backdrop-blur-md">
            <FaCapsules className="text-green-600 text-xs" />
            <span>100% Pure Botanical Extracts</span>
          </div>

          {/* HEADING */}
          <h1 className="text-[28px] sm:text-5xl lg:text-7xl font-black leading-[1.1] mb-3 text-gray-900 drop-shadow-sm">
            Herbal
            <span className="gradient-text block">Extracts</span>
            Manufacturer
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 max-w-sm mx-auto lg:mx-0 font-semibold drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
            Premium Herbal Extracts, Nutraceutical Ingredients & Botanical
            Solutions crafted for purity and efficacy.
          </p>

          {/* BUTTON */}
          <div className="flex justify-center lg:justify-start">
            <Link
              to="/category/All"
              className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-lg shadow-green-700/30 hover:shadow-green-700/50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <FaCapsules />
              <span>Explore Products</span>
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;