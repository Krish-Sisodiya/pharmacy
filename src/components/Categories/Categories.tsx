import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  Pagination,
} from "swiper/modules";

import {
  FaLeaf,
} from "react-icons/fa";

import { categories } from "../../data/categories";

import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <section
      id="products"
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
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-green-200/20 blur-[100px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-green-300/20 blur-[100px] rounded-full"></div>

      <div className="container-custom relative z-10">

        {/* TOP SECTION */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-16"
        >

          {/* SMALL BADGE */}
          <div
            className="
            inline-flex
            items-center gap-3
            bg-green-100
            text-green-700
            px-6 py-3
            rounded-full
            font-semibold
            mb-6
          "
          >

            <FaLeaf />

            Product Categories

          </div>

          {/* HEADING */}
          <h2
            className="
            text-4xl
            md:text-5xl
            lg:text-6xl
            font-black
            leading-tight
            mb-6
          "
          >

            Explore Premium

            <span className="gradient-text block">
              Healthcare Categories
            </span>

          </h2>

          {/* DESCRIPTION */}
          <p
            className="
            text-gray-600
            text-lg
            max-w-3xl
            mx-auto
            leading-relaxed
          "
          >

            Discover modern pharmacy,
            skincare, wellness,
            healthcare, and medical
            product collections with
            premium quality solutions.

          </p>

        </motion.div>

        {/* SLIDER */}
        <Swiper
          modules={[
            Autoplay,
            Pagination,
          ]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          spaceBetween={25}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
            },

            640: {
              slidesPerView: 2,
            },

            768: {
              slidesPerView: 2.5,
            },

            1024: {
              slidesPerView: 4,
            },
          }}
        >

          {categories.map((category) => (

            <SwiperSlide
              key={category.id}
            >

              <CategoryCard
                category={category}
              />

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
};

export default Categories;