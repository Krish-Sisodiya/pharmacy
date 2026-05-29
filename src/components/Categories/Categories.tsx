import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaLeaf } from "react-icons/fa";
import { categories } from "../../data/categories";
import CategoryCard from "./CategoryCard";
import "swiper/css";
import "swiper/css/pagination";

const Categories = () => {
  return (
    <section
      id="products"
      className="relative overflow-hidden py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-green-50/40 to-white"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-green-200/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-green-300/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* TOP SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 px-2"
        >
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold text-xs sm:text-sm mb-4">
            <FaLeaf className="text-green-500" />
            Product Categories
          </div>

          {/* HEADING */}
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-black leading-tight mb-4">
            Explore Premium
            <span className="gradient-text block">Healthcare Categories</span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-500 text-sm sm:text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
            Discover modern pharmacy, skincare, wellness, healthcare,
            and medical product collections with premium quality solutions.
          </p>
        </motion.div>

        {/* SWIPER */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={16}
          breakpoints={{
            320: { slidesPerView: 1.15 },
            480: { slidesPerView: 1.5 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-10"  // pagination dots ke liye space
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <CategoryCard category={category} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Categories;