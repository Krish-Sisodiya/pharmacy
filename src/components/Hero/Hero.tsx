import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaHeartbeat, FaCapsules, FaArrowRight } from "react-icons/fa";
import HeroCard from "./HeroCard";
import { products } from "../../data/products";
import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-100"
    >
      {/* GLOW */}
      <div className="absolute top-0 left-0 w-52 h-52 bg-green-300/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-52 h-52 bg-green-200/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10 py-6 sm:py-10 lg:py-20 flex flex-col lg:grid lg:grid-cols-2 lg:gap-14 lg:items-center gap-0">

        {/* SLIDER — mobile: full width upar */}
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
            className="rounded-3xl overflow-hidden"
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
          {/* SMALL TAG */}
          <p className="text-green-600 font-semibold text-xs tracking-widest uppercase mb-2">
            Premium Pharmacy Store
          </p>

          {/* HEADING */}
          <h1 className="text-[26px] sm:text-5xl lg:text-7xl font-black leading-[1.1] mb-3">
            Modern
            <span className="gradient-text block">Healthcare</span>
            Products
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed mb-5 max-w-sm mx-auto lg:mx-0">
            Discover premium healthcare, skincare, wellness products,
            and pharmacy essentials with trusted modern care.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-500 text-white px-5 py-3 rounded-xl font-semibold shadow-md text-sm"
            >
              <FaCapsules />
              Explore Products
              <FaArrowRight />
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 border-2 border-green-600 text-green-700 px-5 py-3 rounded-xl font-semibold text-sm hover:bg-green-600 hover:text-white transition duration-300"
            >
              <FaHeartbeat />
              Our Services
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;