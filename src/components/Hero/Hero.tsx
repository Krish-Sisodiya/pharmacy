import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  Pagination,
} from "swiper/modules";

import {
  FaArrowRight,
  FaHeartbeat,
  FaCapsules,
} from "react-icons/fa";

import HeroCard from "./HeroCard";

import { products } from "../../data/products";

const Hero = () => {
  return (
    <section
      id="home"
      className="
      relative
      overflow-hidden
      bg-gradient-to-br
      from-green-50
      via-white
      to-green-100
      pt-16
      lg:pt-24
      pb-16
    "
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-green-300/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-green-200/20 blur-[120px] rounded-full"></div>

      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{
            opacity: 0,
            x: -60,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-center lg:text-left"
        >

          {/* SMALL TEXT */}
          <p className="text-green-600 font-semibold text-lg mb-5 tracking-wide">

            Premium Pharmacy Store

          </p>

          {/* HEADING */}
          <h1
            className="
            text-5xl
            md:text-6xl
            lg:text-7xl
            font-black
            leading-tight
            mb-8
          "
          >

            Modern

            <span className="gradient-text block">
              Healthcare
            </span>

            Products

          </h1>

          {/* DESCRIPTION */}
          <p
            className="
            text-gray-600
            text-lg
            leading-relaxed
            max-w-2xl
            mx-auto lg:mx-0
            mb-10
          "
          >

            Discover premium healthcare,
            skincare, wellness products,
            and pharmacy essentials with
            modern quality and trusted care.

          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-5">

            {/* EXPLORE BUTTON */}
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
              group
              flex items-center gap-3
              bg-gradient-to-r
              from-green-600
              to-green-500
              text-white
              px-8 py-4
              rounded-2xl
              font-bold
              shadow-xl
              hover:shadow-green-300/50
              transition duration-300
            "
            >

              <FaCapsules />

              Explore Products

              <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />

            </motion.button>

            {/* SERVICE BUTTON */}
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
              flex items-center gap-3
              border-2 border-green-600
              text-green-700
              px-8 py-4
              rounded-2xl
              font-bold
              hover:bg-green-600
              hover:text-white
              transition duration-300
            "
            >

              <FaHeartbeat />

              Our Services

            </motion.button>

          </div>

        </motion.div>

        {/* RIGHT SLIDER */}
        <motion.div
          initial={{
            opacity: 0,
            x: 60,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative"
        >

          <Swiper
            modules={[
              Autoplay,
              Pagination,
            ]}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop={true}
          >

            {products.map((product) => (

              <SwiperSlide
                key={product.id}
              >

                <HeroCard
                  product={product}
                />

              </SwiperSlide>

            ))}

          </Swiper>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;