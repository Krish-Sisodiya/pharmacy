import { motion } from "framer-motion";

import {
  FaHeartbeat,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const images = [
  "https://images.unsplash.com/photo-1587854692152-cbe660dbde88",

  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",

  "https://images.unsplash.com/photo-1580281657527-47f249e8f4df",
];

const About = () => {
  return (
    <section
      id="about"
      className="
      relative
      overflow-hidden
      py-24
      bg-gradient-to-b
      from-white
      via-green-50/40
      to-white
    "
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[320px] h-[320px] bg-green-200/30 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[280px] h-[280px] bg-green-300/20 blur-[100px] rounded-full"></div>

      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{
            opacity: 0,
            x: -60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="relative"
        >

          {/* MAIN IMAGE SLIDER */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="
            overflow-hidden
            rounded-[35px]
            shadow-[0_20px_60px_rgba(0,0,0,0.12)]
          "
          >

            <Swiper
              modules={[
                Autoplay,
                EffectFade,
              ]}
              effect="fade"
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="
              w-full
              h-[520px]
            "
            >

              {images.map((image, index) => (

                <SwiperSlide
                  key={index}
                >

                  <img
                    src={image}
                    alt=""
                    className="
                    w-full
                    h-[520px]
                    object-cover
                  "
                  />

                </SwiperSlide>

              ))}

            </Swiper>

          </motion.div>

          {/* FLOATING GLASS CARD */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
            absolute
            bottom-6
            left-6
            bg-white/20
            backdrop-blur-2xl
            border border-white/20
            rounded-3xl
            px-6 py-5
            shadow-2xl
          "
          >

            <div className="flex items-center gap-4">

              <div
                className="
                w-14
                h-14
                rounded-2xl
                bg-green-500
                text-white
                flex items-center justify-center
                text-xl
              "
              >

                <FaHeartbeat />

              </div>

              <div>

                <h3 className="text-white text-lg font-bold">
                  Modern Healthcare
                </h3>

                <p className="text-green-100 text-sm">
                  Trusted Pharmacy Solutions
                </p>

              </div>

            </div>

          </motion.div>

        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{
            opacity: 0,
            x: 60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="max-w-2xl"
        >

          {/* TOP BADGE */}
          <div
            className="
            inline-flex
            items-center gap-3
            bg-green-100
            text-green-700
            px-5 py-3
            rounded-full
            font-semibold
            mb-6
          "
          >

            <FaHeartbeat />

            About PharmaCare

          </div>

          {/* HEADING */}
          <h2
            className="
            text-4xl
            md:text-5xl
            lg:text-6xl
            font-black
            leading-tight
            mb-8
          "
          >

            Modern Healthcare

            <span className="gradient-text block">
              For Better Living
            </span>

          </h2>

          {/* DESCRIPTION */}
          <p
            className="
            text-gray-600
            text-lg
            leading-relaxed
            mb-8
          "
          >

            PharmaCare provides premium
            healthcare, skincare,
            wellness, and pharmacy
            solutions designed for
            healthier lifestyles with
            trusted quality products
            and modern care services.

          </p>

          {/* EXTRA TEXT */}
          <p
            className="
            text-gray-500
            leading-relaxed
            text-base
          "
          >

            Our platform combines
            modern healthcare products,
            wellness essentials,
            skincare collections,
            and pharmacy solutions
            with a smooth and trusted
            customer experience.

          </p>

        </motion.div>

      </div>

    </section>
  );
};

export default About;