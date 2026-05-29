import { motion } from "framer-motion";
import { FaHeartbeat } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const images = [
  "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80",
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
  "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?w=800&q=80",
];

const stats = [
  { value: "500+", label: "Products" },
  { value: "10K+", label: "Customers" },
  { value: "5★", label: "Rating" },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-green-50/40 to-white overflow-x-hidden"
    >
      {/* BG GLOW */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-200/30 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-green-300/20 blur-[90px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mb-6 lg:hidden"
        >
          {/* SLIDER — mobile only */}
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt="PharmaCare healthcare"
                    className="w-full h-[240px] object-cover"
                    loading="lazy"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* FLOATING CARD — mobile */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-4 left-3 right-3 bg-white/95 backdrop-blur-xl border border-green-100 rounded-2xl px-4 py-3 shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-500 text-white flex items-center justify-center shrink-0">
                <FaHeartbeat />
              </div>
              <div>
                <p className="text-gray-800 text-sm font-bold">Modern Healthcare</p>
                <p className="text-gray-400 text-xs">Trusted Pharmacy Solutions</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* MAIN GRID — desktop */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* LEFT — desktop slider only */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="overflow-hidden rounded-[35px] shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
            >
              <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt="PharmaCare"
                      className="w-full h-[520px] object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>

            {/* FLOATING CARD — desktop */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-6 left-6 bg-white/20 backdrop-blur-2xl border border-white/20 rounded-3xl px-6 py-5 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-green-500 text-white flex items-center justify-center text-xl">
                  <FaHeartbeat />
                </div>
                <div>
                  <h3 className="text-white text-lg font-bold">Modern Healthcare</h3>
                  <p className="text-green-100 text-sm">Trusted Pharmacy Solutions</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full"
          >
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold text-xs sm:text-sm mb-4">
              <FaHeartbeat />
              About PharmaCare
            </div>

            {/* HEADING */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-4">
              Modern Healthcare
              <span className="gradient-text block">For Better Living</span>
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-4">
              PharmaCare provides premium healthcare, skincare, wellness,
              and pharmacy solutions designed for healthier lifestyles
              with trusted quality products and modern care services.
            </p>

            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8">
              Our platform combines modern healthcare products, wellness
              essentials, skincare collections, and pharmacy solutions
              with a smooth and trusted customer experience.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-gray-100">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-green-600 text-xl sm:text-2xl font-black">{stat.value}</p>
                  <p className="text-gray-400 text-xs sm:text-sm mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;