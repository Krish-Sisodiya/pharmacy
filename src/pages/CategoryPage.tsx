
import { useNavigate, useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaSearch,
  FaThLarge,
  FaCapsules,
  FaArrowLeft,
  FaTimes,
  FaStar,
  FaLeaf,
  FaWhatsapp,
} from "react-icons/fa";

import { categories } from "../data/categories";
import { products } from "../data/products";
import ProductCard from "../components/Products/ProductCard";
import AnimatedBackground from "../components/AnimatedBackground";

const CategoryPage = () => {
  const navigate = useNavigate();
  const { name } = useParams();

  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const activeCategory = name || "All";

  // Filter products by category and search text
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        activeCategory.toLowerCase() === "all" ||
        product.category.toLowerCase() === activeCategory.toLowerCase();

      const searchMatch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search]);

  // WhatsApp enquiry
  const handleBuyOnWhatsApp = () => {
    if (!selectedProduct) return;

    const message = `Hello, I am interested in purchasing this product.

Product Name: ${selectedProduct.name}
Category: ${selectedProduct.category}
Details: ${selectedProduct.details || "Not provided"}
Rating: ${selectedProduct.rating ?? "N/A"}

Please share the price and availability.`;

    window.open(
      `https://wa.me/447776824776?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="relative min-h-screen">
      {/* Organic background */}
      <div
        className="fixed inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1920&auto=format&fit=crop')",
        }}
      />

      {/* Frosted overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-white/30 via-white/80 to-white/95 backdrop-blur-[2px] shadow-[inset_0_0_120px_rgba(255,255,255,0.9)]" />

      {/* Animated background */}
      <div className="relative z-[1]">
        <AnimatedBackground />
      </div>

      <section className="relative z-10 min-h-screen overflow-x-hidden pb-16 sm:pb-24">
        {/* Background glow */}
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-green-400/20 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-emerald-300/20 blur-[110px] pointer-events-none" />

        <div className="container-custom relative z-10 pt-6 sm:pt-10">
          {/* Back button */}
          <motion.button
            type="button"
            onClick={() => navigate("/")}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ x: -4 }}
            whileTap={{ scale: 0.95 }}
            className="group mb-6 flex w-fit cursor-pointer items-center gap-2 text-sm font-semibold text-green-700 sm:mb-8 sm:text-base"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-green-200/60 bg-white/90 text-green-600 shadow-sm transition duration-300 group-hover:border-green-600 group-hover:bg-green-600 group-hover:text-white sm:h-10 sm:w-10">
              <FaArrowLeft />
            </span>

            <span className="transition duration-300 group-hover:text-green-600">
              Back
            </span>
          </motion.button>

          {/* Page heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 px-2 text-center sm:mb-10"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-200/50 bg-white/90 px-4 py-2 shadow-md backdrop-blur-xl">
              <FaCapsules className="text-xs text-green-600" />
              <span className="text-xs font-semibold text-gray-700 sm:text-sm">
                Aushadhi Walah Collection
              </span>
            </div>

            <h1 className="mb-3 text-2xl font-black leading-tight text-gray-900 drop-shadow-sm sm:text-4xl lg:text-6xl">
              {activeCategory}
              <span className="gradient-text block">Products</span>
            </h1>

            <p className="mx-auto max-w-md text-sm font-medium leading-relaxed text-gray-600 sm:text-base">
              Explore premium pharmacy, skincare, wellness, and healthcare
              collections with modern trusted solutions.
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto mb-5 max-w-2xl sm:mb-8"
          >
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-green-600" />

            <input
              type="text"
              placeholder="Search healthcare products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border border-green-200/60 bg-white/90 py-3.5 pl-11 pr-4 text-sm text-gray-800 shadow-md outline-none backdrop-blur-md transition duration-300 focus:border-green-500 focus:bg-white focus:shadow-lg sm:py-4"
            />
          </motion.div>

          {/* Category filters */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="scrollbar-hide -mx-4 mb-6 flex gap-2 overflow-x-auto px-4 pb-3 sm:mb-10"
          >
            <motion.button
              type="button"
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/category/All")}
              className={`flex shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-xl px-3.5 py-2 text-xs font-semibold shadow-sm transition duration-300 sm:px-5 sm:py-2.5 sm:text-sm ${
                activeCategory.toLowerCase() === "all"
                  ? "bg-gradient-to-r from-green-600 to-green-500 text-white shadow-md shadow-green-600/20"
                  : "border border-green-200/50 bg-white/90 text-gray-700 backdrop-blur-sm hover:bg-green-50"
              }`}
            >
              <FaThLarge className="text-[10px]" />
              All
            </motion.button>

            {categories.map((cat) => (
              <motion.button
                type="button"
                key={cat.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(`/category/${cat.name}`)}
                className={`shrink-0 cursor-pointer whitespace-nowrap rounded-xl px-3.5 py-2 text-xs font-semibold shadow-sm transition duration-300 sm:px-5 sm:py-2.5 sm:text-sm ${
                  activeCategory.toLowerCase() === cat.name.toLowerCase()
                    ? "bg-gradient-to-r from-green-600 to-green-500 text-white shadow-md shadow-green-600/20"
                    : "border border-green-200/50 bg-white/90 text-gray-700 backdrop-blur-sm hover:bg-green-50"
                }`}
              >
                {cat.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Products count */}
          {filteredProducts.length > 0 && (
            <p className="mb-4 px-1 text-xs font-medium text-gray-600 sm:text-sm">
              Showing{" "}
              <span className="font-bold text-green-700">
                {filteredProducts.length}
              </span>{" "}
              products
            </p>
          )}

          {/* Products grid */}
          {filteredProducts.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  <ProductCard
                    product={product}
                    onImageClick={() => setSelectedProduct(product)}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Empty state */
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mx-auto max-w-xl rounded-3xl border border-green-100 bg-white/60 py-16 text-center shadow-sm backdrop-blur-md sm:py-24"
            >
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-3xl text-green-600 shadow-inner sm:h-24 sm:w-24">
                <FaSearch />
              </div>

              <h2 className="mb-2 text-xl font-black text-gray-800 sm:text-2xl">
                No Products Found
              </h2>

              <p className="px-4 text-sm text-gray-500 sm:text-base">
                Try searching with another product name or category.
              </p>

              <motion.button
                type="button"
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSearch("");
                  navigate("/category/All");
                }}
                className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition duration-300 hover:bg-green-700"
              >
                <FaThLarge className="text-xs" />
                View All Products
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Responsive product details modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 lg:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            {/* Dark backdrop */}
            <div className="absolute inset-0 bg-gray-950/65 backdrop-blur-md" />

            {/* Modal panel */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedProduct.name} product details`}
              initial={{ opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 12 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col overflow-y-auto rounded-2xl border border-white/70 bg-white shadow-[0_25px_90px_rgba(0,0,0,0.3)] sm:rounded-3xl lg:grid lg:grid-cols-2 lg:overflow-hidden"
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                aria-label="Close product details"
                className="absolute right-3 top-3 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/95 text-gray-700 shadow-lg transition hover:rotate-90 hover:bg-red-500 hover:text-white sm:right-4 sm:top-4"
              >
                <FaTimes />
              </button>

              {/* Product image */}
              <div className="relative h-60 shrink-0 overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100 sm:h-80 lg:h-full lg:min-h-[560px]">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/65 via-gray-950/5 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 sm:bottom-6 sm:left-6 sm:right-6">
                  <span className="inline-flex max-w-[75%] items-center gap-2 rounded-full border border-white/60 bg-white/95 px-3 py-2 text-xs font-bold text-green-800 shadow-lg sm:text-sm">
                    <FaLeaf className="shrink-0" />
                    <span className="truncate">
                      {selectedProduct.category}
                    </span>
                  </span>

                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white/95 px-3 py-2 text-sm font-extrabold text-gray-800 shadow-lg">
                    <FaStar className="text-yellow-400" />
                    {selectedProduct.rating ?? "N/A"}
                  </span>
                </div>
              </div>

              {/* Product information */}
              <div className="flex min-w-0 flex-col p-5 sm:p-7 lg:max-h-[92vh] lg:overflow-y-auto lg:p-9 xl:p-10">
                <div className="mb-5 pr-9 sm:mb-6">
                  <p className="mb-2 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-green-700 sm:text-xs">
                    <span className="h-1.5 w-6 rounded-full bg-green-500" />
                    Product details
                  </p>

                  <h2 className="break-words text-2xl font-black leading-tight tracking-tight text-gray-950 sm:text-3xl xl:text-4xl">
                    {selectedProduct.name}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
                    Learn more about this product and contact us for current
                    pricing and availability.
                  </p>
                </div>

                {/* Description */}
                <div className="rounded-2xl border border-green-100 bg-gradient-to-br from-green-50 to-white p-4 sm:p-5">
                  <p className="mb-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-green-800 sm:text-xs">
                    Description
                  </p>

                  <p className="whitespace-pre-line break-words text-sm leading-7 text-gray-600 sm:text-[15px]">
                    {selectedProduct.details ||
                      "No additional details available."}
                  </p>
                </div>

                {/* Optional product information */}
                {(selectedProduct.price != null ||
                  selectedProduct.brand) && (
                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {selectedProduct.price != null && (
                      <div className="rounded-xl border border-gray-100 bg-white p-4">
                        <p className="mb-1 text-xs font-medium text-gray-500">
                          Price
                        </p>
                        <p className="break-words font-extrabold text-green-800">
                          {selectedProduct.price}
                        </p>
                      </div>
                    )}

                    {selectedProduct.brand && (
                      <div className="rounded-xl border border-gray-100 bg-white p-4">
                        <p className="mb-1 text-xs font-medium text-gray-500">
                          Brand
                        </p>
                        <p className="break-words font-extrabold text-gray-800">
                          {selectedProduct.brand}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* WhatsApp enquiry */}
                <div className="mt-6 lg:mt-auto lg:pt-7">
                  <button
                    type="button"
                    onClick={handleBuyOnWhatsApp}
                    className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-5 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-green-900/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[#1ebe5d] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-200 sm:py-4 sm:text-base"
                  >
                    <FaWhatsapp className="text-xl" />
                    Enquire on WhatsApp
                  </button>

                  <p className="mt-3 text-center text-xs leading-5 text-gray-400">
                    Ask us about price, availability, and product information.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CategoryPage;
