import { useNavigate, useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaThLarge, FaCapsules } from "react-icons/fa";
import Navbar from "../components/Header/Navbar";
import TopHeader from "../components/Header/TopHeader";
import { categories } from "../data/categories";
import { products } from "../data/products";
import ProductCard from "../components/Products/ProductCard";

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
    <>
      <TopHeader />
      <Navbar />

      <section className="relative overflow-x-hidden min-h-screen bg-gradient-to-b from-green-50 via-white to-green-100/40 pt-8 sm:pt-14 pb-16 sm:pb-24">

        {/* BG GLOW */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-green-300/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-green-200/20 blur-[100px] rounded-full pointer-events-none" />

        <div className="container-custom relative z-10">

          {/* PAGE TOP */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-6 sm:mb-10 px-2"
          >
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-xl border border-green-100 px-4 py-2 rounded-full shadow-md mb-4">
              <FaCapsules className="text-green-600 text-xs" />
              <span className="font-semibold text-gray-700 text-xs sm:text-sm">
                Healthcare Collection
              </span>
            </div>

            {/* HEADING */}
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-black leading-tight mb-3">
              {activeCategory}
              <span className="gradient-text block">Products</span>
            </h1>

            {/* TEXT */}
            <p className="text-gray-500 max-w-md mx-auto leading-relaxed text-sm sm:text-base">
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
              className="
                w-full bg-white/90 backdrop-blur-xl
                border border-green-100 shadow-lg
                rounded-2xl py-3.5 sm:py-4
                pl-11 pr-4
                outline-none text-gray-700 text-sm
                focus:border-green-400 transition duration-300
              "
            />
          </motion.div>

          {/* CATEGORY FILTER PILLS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide pb-3 mb-7 sm:mb-10 -mx-4 px-4"
          >
            {/* ALL */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(`/category/All`)}
              className={`
                flex items-center gap-1.5 whitespace-nowrap
                px-3.5 py-2 sm:px-5 sm:py-3
                rounded-xl text-xs sm:text-sm font-semibold
                transition duration-300 shadow-sm shrink-0
                ${activeCategory === "All"
                  ? "bg-gradient-to-r from-green-600 to-green-500 text-white shadow-md"
                  : "bg-white text-gray-700 border border-green-100 hover:bg-green-50"
                }
              `}
            >
              <FaThLarge className="text-[10px] sm:text-xs" />
              All
            </motion.button>

            {/* OTHER CATEGORIES */}
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(`/category/${cat.name}`)}
                className={`
                  whitespace-nowrap shrink-0
                  px-3.5 py-2 sm:px-5 sm:py-3
                  rounded-xl text-xs sm:text-sm font-semibold
                  transition duration-300 shadow-sm
                  ${activeCategory.toLowerCase() === cat.name.toLowerCase()
                    ? "bg-gradient-to-r from-green-600 to-green-500 text-white shadow-md"
                    : "bg-white text-gray-700 border border-green-100 hover:bg-green-50"
                  }
                `}
              >
                {cat.name}
              </motion.button>
            ))}
          </motion.div>

          {/* PRODUCTS COUNT */}
          {filteredProducts.length > 0 && (
            <p className="text-gray-400 text-xs sm:text-sm mb-4 px-1">
              Showing <span className="text-green-600 font-semibold">{filteredProducts.length}</span> products
            </p>
          )}

          {/* PRODUCTS GRID */}
          {filteredProducts.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 lg:gap-7"
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

            /* EMPTY STATE */
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 sm:py-24"
            >
              <div className="w-20 h-20 sm:w-28 sm:h-28 mx-auto rounded-full bg-green-100 flex items-center justify-center text-green-600 text-3xl sm:text-4xl mb-5">
                <FaSearch />
              </div>
              <h2 className="text-xl sm:text-3xl font-black text-gray-700 mb-3">
                No Products Found
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">
                Try searching with another product name or category.
              </p>
            </motion.div>

          )}
        </div>
      </section>
    </>
  );
};

export default CategoryPage;