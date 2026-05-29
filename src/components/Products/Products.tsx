import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaCapsules } from "react-icons/fa";
import ProductCard from "./ProductCard";
import { products } from "../../data/products";
import "swiper/css";
import "swiper/css/pagination";

const Products = () => {
  return (
    <section
      id="products"
      className="relative overflow-hidden py-14 sm:py-20 bg-gradient-to-b from-green-50 via-white to-green-50"
    >
      {/* GLOW */}
      <div className="absolute top-0 left-0 w-[280px] h-[280px] bg-green-300/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[240px] h-[240px] bg-green-200/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 px-2"
        >
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold text-xs sm:text-sm mb-4">
            <FaCapsules className="text-xs" />
            Popular Products
          </div>

          {/* TITLE */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black leading-tight mb-3">
            Trending
            <span className="gradient-text block">Healthcare Products</span>
          </h2>

          {/* TEXT */}
          <p className="text-gray-500 text-sm sm:text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
            Explore premium pharmacy, skincare, wellness, and healthcare
            essentials with trusted modern quality.
          </p>
        </motion.div>

        {/* SLIDER */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={14}
          breakpoints={{
            320: { slidesPerView: 1.3 },
            480: { slidesPerView: 1.8 },
            640: { slidesPerView: 2.2 },
            768: { slidesPerView: 2.8 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-10"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Products;