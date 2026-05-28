import { useNavigate, useParams } from "react-router-dom";
import { useMemo, useState } from "react";

import { motion } from "framer-motion";

import {
  FaSearch,
  FaThLarge,
  FaCapsules,
} from "react-icons/fa";

import Navbar from "../components/Header/Navbar";
import TopHeader from "../components/Header/TopHeader";

import { categories } from "../data/categories";
import { products } from "../data/products";

import ProductCard from "../components/Products/ProductCard";

const CategoryPage = () => {

  const navigate = useNavigate();

  const { name } = useParams();

  const [search, setSearch] = useState("");

  /* ACTIVE CATEGORY */
  const activeCategory = name || "All";

  /* FILTER PRODUCTS */
  const filteredProducts = useMemo(() => {

    return products.filter((product) => {

      const categoryMatch =
        activeCategory === "All"
          ? true
          : product.category.toLowerCase() ===
            activeCategory.toLowerCase();

      const searchMatch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase());

      return categoryMatch && searchMatch;

    });

  }, [activeCategory, search]);

  return (
    <>
      <TopHeader />

      <Navbar />

      <section
        className="
        relative
        overflow-hidden
        min-h-screen
        bg-gradient-to-b
        from-green-50
        via-white
        to-green-100/40
        pt-14
        pb-24
      "
      >

        {/* BACKGROUND GLOW */}
        <div className="absolute top-0 left-0 w-[320px] h-[320px] bg-green-300/20 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[280px] h-[280px] bg-green-200/20 blur-[100px] rounded-full"></div>

        <div className="container-custom relative z-10">

          {/* PAGE TOP */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
            text-center
            mb-14
          "
          >

            {/* BADGE */}
            <div
              className="
              inline-flex
              items-center
              gap-3
              bg-white/80
              backdrop-blur-xl
              border border-green-100
              px-6 py-3
              rounded-full
              shadow-lg
              mb-6
            "
            >

              <FaCapsules className="text-green-600" />

              <span className="font-semibold text-gray-700">
                Healthcare Collection
              </span>

            </div>

            {/* HEADING */}
            <h1
              className="
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-black
              leading-tight
              mb-5
            "
            >

              {activeCategory}

              <span className="gradient-text block">
                Products
              </span>

            </h1>

            {/* TEXT */}
            <p
              className="
              text-gray-600
              max-w-2xl
              mx-auto
              leading-relaxed
              text-base
              md:text-lg
            "
            >

              Explore premium pharmacy,
              skincare, wellness, and
              healthcare collections with
              modern trusted solutions.

            </p>

          </motion.div>

          {/* SEARCH */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
            relative
            mb-10
            max-w-3xl
            mx-auto
          "
          >

            <FaSearch
              className="
              absolute
              top-1/2
              left-5
              -translate-y-1/2
              text-green-600
              text-lg
            "
            />

            <input
              type="text"
              placeholder="Search healthcare products..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="
              w-full
              bg-white/90
              backdrop-blur-xl
              border border-green-100
              shadow-xl
              rounded-3xl
              py-5
              pl-14
              pr-5
              outline-none
              text-gray-700
              focus:border-green-500
              transition duration-300
            "
            />

          </motion.div>

          {/* CATEGORIES */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
            flex
            gap-4
            overflow-x-auto
            scrollbar-hide
            pb-4
            mb-14
          "
          >

            {/* ALL CATEGORY */}
            <motion.button
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.96,
              }}
              onClick={() =>
                navigate(`/category/All`)
              }
              className={`
                flex
                items-center
                gap-3
                whitespace-nowrap
                px-6
                py-4
                rounded-2xl
                font-semibold
                transition duration-300
                shadow-lg
                ${
                  activeCategory === "All"
                    ? "bg-gradient-to-r from-green-600 to-green-500 text-white"
                    : "bg-white text-gray-700 border border-green-100 hover:bg-green-50"
                }
              `}
            >

              <FaThLarge />

              All Categories

            </motion.button>

            {/* OTHER CATEGORIES */}
            {categories.map((cat) => (

              <motion.button
                key={cat.id}
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={() =>
                  navigate(
                    `/category/${cat.name}`
                  )
                }
                className={`
                  whitespace-nowrap
                  px-6
                  py-4
                  rounded-2xl
                  font-semibold
                  transition duration-300
                  shadow-lg
                  ${
                    activeCategory.toLowerCase() ===
                    cat.name.toLowerCase()
                      ? "bg-gradient-to-r from-green-600 to-green-500 text-white"
                      : "bg-white text-gray-700 border border-green-100 hover:bg-green-50"
                  }
                `}
              >

                {cat.name}

              </motion.button>

            ))}

          </motion.div>

          {/* PRODUCTS */}
          {filteredProducts.length > 0 ? (

            <motion.div
              layout
              className="
              grid
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              gap-7
            "
            >

              {filteredProducts.map(
                (product, index) => (

                  <motion.div
                    key={product.id}
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                  >

                    <ProductCard
                      product={product}
                    />

                  </motion.div>

                )
              )}

            </motion.div>

          ) : (

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              className="
              text-center
              py-24
            "
            >

              <div
                className="
                w-28
                h-28
                mx-auto
                rounded-full
                bg-green-100
                flex
                items-center
                justify-center
                text-green-600
                text-4xl
                mb-6
              "
              >

                <FaSearch />

              </div>

              <h2
                className="
                text-3xl
                font-black
                text-gray-700
                mb-4
              "
              >

                No Products Found

              </h2>

              <p className="text-gray-500">

                Try searching with another
                product name or category.

              </p>

            </motion.div>

          )}

        </div>

      </section>
    </>
  );
};

export default CategoryPage;