import { motion } from "framer-motion";
import { FaHeartbeat } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const images = [
  "../../../img/About1.png",
  "../../../img/about2.jpeg",
  "../../../img/about3.jpeg",
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-14 sm:py-20 lg:py-24 overflow-x-hidden"
    >
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
                    alt="Aushadhiwalah"
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
                <p className="text-gray-800 text-sm font-bold">Aushadhi Walah</p>
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
              About Aushadhiwalah
            </div>

            {/* HEADING */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-4">
              Modern Healthcare
              <span className="gradient-text block">For Better Living</span>
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-4">
              Aushadhi Walah provides premium herbal extracts, organic raw herbs, and essential oils designed to support healthier lifestyles and natural wellness. With a focus on trusted quality and authentic botanical ingredients, we bring nature and modern processing together.
            </p>

            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8">
             Our platform combines standardized herbal extracts, organic raw herbs, natural powders, and essential oils with a reliable supply chain and a seamless B2B and B2C customer experience, serving businesses looking for pure, consistent, and quality driven herbal ingredients.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;