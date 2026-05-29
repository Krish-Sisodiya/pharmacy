import { motion } from "framer-motion";
import { FaStar, FaCapsules } from "react-icons/fa";

interface Props {
  product: any;
}

const ProductCard = ({ product }: Props) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.35 }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-green-100"
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[180px] sm:h-[220px] lg:h-[260px] object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* ICON — top left */}
        <div className="absolute top-3 left-3 w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-white/20 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white text-sm sm:text-base">
          <FaCapsules />
        </div>

        {/* RATING — bottom right */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/30 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-xs font-semibold">
          <FaStar className="text-yellow-400 text-[10px]" />
          {product.rating}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-3 sm:p-4 lg:p-5">
        {/* NAME */}
        <h2 className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 mb-1.5 leading-tight line-clamp-1">
          {product.name}
        </h2>

        {/* DETAILS */}
        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-2">
          {product.details}
        </p>
      </div>

      {/* HOVER BORDER */}
      <div className="absolute inset-0 border border-transparent group-hover:border-green-300/60 rounded-2xl transition duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default ProductCard;