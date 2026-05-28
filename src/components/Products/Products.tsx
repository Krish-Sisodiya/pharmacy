// Products.tsx

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  Pagination,
} from "swiper/modules";

import {
  FaCapsules,
} from "react-icons/fa";

import ProductCard from "./ProductCard";

import { products } from "../../data/products";

const Products = () => {
  return (
    <section
      id="products"
      className="
      relative
      overflow-hidden
      py-20
      bg-gradient-to-b
      from-green-50
      via-white
      to-green-50
    "
    >

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-[280px] h-[280px] bg-green-300/20 blur-[100px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[240px] h-[240px] bg-green-200/20 blur-[100px] rounded-full"></div>

      <div className="container-custom relative z-10">

        {/* HEADING */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
          className="text-center mb-14"
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

            <FaCapsules />

            Popular Products

          </div>

          {/* TITLE */}
          <h2
            className="
            text-4xl
            md:text-5xl
            font-black
            leading-tight
            mb-5
          "
          >

            Trending

            <span className="gradient-text block">
              Healthcare Products
            </span>

          </h2>

          {/* TEXT */}
          <p
            className="
            text-gray-600
            text-lg
            max-w-3xl
            mx-auto
            leading-relaxed
          "
          >

            Explore premium pharmacy,
            skincare, wellness, and
            healthcare essentials with
            trusted modern quality.

          </p>

        </motion.div>

        {/* SLIDER */}
        <Swiper
          modules={[
            Autoplay,
            Pagination,
          ]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          spaceBetween={22}
          breakpoints={{
            320: {
              slidesPerView: 1.15,
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

          {products.map((product) => (

            <SwiperSlide
              key={product.id}
            >

              <ProductCard
                product={product}
              />

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
};

export default Products;