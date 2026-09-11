import { useNavigate, useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaThLarge, FaCapsules, FaArrowLeft } from "react-icons/fa";
import { categories } from "../data/categories";
import { products } from "../data/products";
import ProductCard from "../components/Products/ProductCard";
import AnimatedBackground from "../components/AnimatedBackground";

// 👉 Agar aapke paas local image ho to:
// import herbsBg from "../../../public/img/herbs-extract.jpg"; 
// aur niche style mein backgroundImage: `url(${herbsBg})` likh sakte hain.

const CategoryPage = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const [search, setSearch] = useState("");

  const activeCategory = name || "All";

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        activeCategory === "All"
          ? true
          : product.category.toLowerCase() === activeCategory.toLowerCase();
      const searchMatch = product.name.toLowerCase().includes(search.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search]);

  return (
    <div className="relative min-h-screen">
      
      {/* 🌿 ORGANIC HERBS BACKGROUND IMAGE */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1920&auto=format&fit=crop')`,
        }}
      />

      {/* 🤍 WHITE SHADOW / FROSTED OVERLAY (Taaki image dikhe aur text clear rahe) */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-white/30 via-white/80 to-white/95 backdrop-blur-[2px] shadow-[inset_0_0_120px_rgba(255,255,255,0.9)]" />

      {/* BUBBLE BACKGROUND */}
      <div className="relative z-[1]">
        <AnimatedBackground />
      </div>

      <section className="relative z-10 overflow-x-hidden min-h-screen pb-16 sm:pb-24">
        
        {/* BG GLOW ACCENTS */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-400/20 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-300/20 blur-[110px] rounded-full pointer-events-none" />

        <div className="container-custom relative z-10 pt-6 sm:pt-10">

          {/* BACK BUTTON */}
          <motion.button
            onClick={() => navigate("/")}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ x: -4 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-green-700 font-semibold text-sm sm:text-base mb-6 sm:mb-8 group w-fit cursor-pointer"
          >
            <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/90 backdrop-blur-md border border-green-200/60 shadow-sm flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition duration-300">
              <FaArrowLeft className="text-sm" />
            </span>

            <span className="group-hover:text-green-600 transition duration-300">
              Back
            </span>
          </motion.button>

          {/* PAGE TOP */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-6 sm:mb-10 px-2"
          >
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-xl border border-green-200/50 px-4 py-2 rounded-full shadow-md mb-4">
              <FaCapsules className="text-green-600 text-xs" />
              <span className="font-semibold text-gray-700 text-xs sm:text-sm">
                Aushadhi Walah Collection
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-black leading-tight mb-3 text-gray-900 drop-shadow-sm">
              {activeCategory}
              <span className="gradient-text block">Products</span>
            </h1>

            <p className="text-gray-600 max-w-md mx-auto leading-relaxed text-sm sm:text-base font-medium">
              Explore premium pharmacy, skincare, wellness, and healthcare
              collections with modern trusted solutions.
            </p>
          </motion.div>

          {/* SEARCH */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative mb-5 sm:mb-8 max-w-2xl mx-auto"
          >
            <FaSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-green-600 text-sm" />
            <input
              type="text"
              placeholder="Search healthcare products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/90 backdrop-blur-md border border-green-200/60 shadow-md rounded-2xl py-3.5 sm:py-4 pl-11 pr-4 outline-none text-gray-800 text-sm focus:border-green-500 focus:shadow-lg focus:bg-white transition duration-300"
            />
          </motion.div>

          {/* CATEGORY FILTER PILLS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex gap-2 overflow-x-auto scrollbar-hide pb-3 mb-6 sm:mb-10 -mx-4 px-4"
          >
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(`/category/All`)}
              className={`
                flex items-center gap-1.5 whitespace-nowrap shrink-0
                px-3.5 py-2 sm:px-5 sm:py-2.5
                rounded-xl text-xs sm:text-sm font-semibold
                transition duration-300 shadow-sm cursor-pointer
                ${activeCategory === "All"
                  ? "bg-gradient-to-r from-green-600 to-green-500 text-white shadow-md shadow-green-600/20"
                  : "bg-white/90 backdrop-blur-sm text-gray-700 border border-green-200/50 hover:bg-green-50"
                }
              `}
            >
              <FaThLarge className="text-[10px]" />
              All
            </motion.button>

            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(`/category/${cat.name}`)}
                className={`
                  whitespace-nowrap shrink-0
                  px-3.5 py-2 sm:px-5 sm:py-2.5
                  rounded-xl text-xs sm:text-sm font-semibold
                  transition duration-300 shadow-sm cursor-pointer
                  ${activeCategory.toLowerCase() === cat.name.toLowerCase()
                    ? "bg-gradient-to-r from-green-600 to-green-500 text-white shadow-md shadow-green-600/20"
                    : "bg-white/90 backdrop-blur-sm text-gray-700 border border-green-200/50 hover:bg-green-50"
                  }
                `}
              >
                {cat.name}
              </motion.button>
            ))}
          </motion.div>

          {/* PRODUCTS COUNT */}
          {filteredProducts.length > 0 && (
            <p className="text-gray-600 text-xs sm:text-sm mb-4 px-1 font-medium">
              Showing{" "}
              <span className="text-green-700 font-bold">
                {filteredProducts.length}
              </span>{" "}
              products
            </p>
          )}

          {/* PRODUCTS GRID */}
          {filteredProducts.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 lg:gap-6"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 sm:py-24 bg-white/60 backdrop-blur-md rounded-3xl border border-green-100 max-w-xl mx-auto shadow-sm"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-green-100 flex items-center justify-center text-green-600 text-3xl mb-5 shadow-inner">
                <FaSearch />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-gray-800 mb-2">
                No Products Found
              </h2>
              <p className="text-gray-500 text-sm sm:text-base px-4">
                Try searching with another product name or category.
              </p>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(`/category/All`)}
                className="mt-6 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-md transition duration-300 cursor-pointer"
              >
                <FaThLarge className="text-xs" />
                View All Products
              </motion.button>
            </motion.div>
          )}

        </div>
      </section>
    </div>
  );
};

export default CategoryPage;