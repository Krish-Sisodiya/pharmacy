import { motion } from "framer-motion";
import { FaStar, FaWhatsapp, FaLeaf, FaExpandAlt } from "react-icons/fa";

interface Props {
  product: any;
  onImageClick?: () => void;
}

const ProductCard = ({ product, onImageClick }: Props) => {
  const whatsappNumber = "447776824776";

  const handleBuyOnWhatsApp = () => {
    const message = `Hello, I am interested in purchasing this product.

Product Name: ${product.name}
Category: ${product.category}
Details: ${product.details || "Not provided"}
Rating: ${product.rating ?? "N/A"}

Please share the price and availability.`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.35 }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-green-100"
    >
      {/* CLICKABLE IMAGE */}
      <div
        role="button"
        tabIndex={0}
        aria-label={`View details for ${product.name}`}
        onClick={onImageClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onImageClick?.();
          }
        }}
        className="relative overflow-hidden cursor-pointer"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[180px] sm:h-[220px] lg:h-[260px] object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

        {/* LEAF ICON */}
        <div className="absolute top-3 left-3 w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-white/20 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white text-sm sm:text-base pointer-events-none">
          <FaLeaf />
        </div>

        {/* RATING */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-xs font-semibold pointer-events-none">
          <FaStar className="text-yellow-400 text-[10px]" />
          {product.rating ?? "N/A"}
        </div>

        {/* VIEW DETAILS HINT */}
        <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <span className="flex items-center gap-1.5 bg-white/95 text-green-700 px-3 py-2 rounded-lg text-xs font-bold shadow-md">
            <FaExpandAlt />
            View Details
          </span>
        </div>
      </div>

      {/* PRODUCT CONTENT */}
      <div className="p-3 sm:p-4 lg:p-5">
        <h2 className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 mb-1.5 leading-tight line-clamp-1">
          {product.name}
        </h2>

        <p className="text-green-700 text-xs font-semibold mb-2">
          {product.category}
        </p>

        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-4">
          {product.details || "No additional details available."}
        </p>

        {/* WHATSAPP BUTTON */}
        <motion.button
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.96 }}
          onClick={handleBuyOnWhatsApp}
          className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-xs sm:text-sm py-2.5 sm:py-3 rounded-xl transition duration-300 shadow-sm"
        >
          <FaWhatsapp className="text-base sm:text-lg" />
          Buy on WhatsApp
        </motion.button>
      </div>

      {/* HOVER BORDER */}
      <div className="absolute inset-0 border border-transparent group-hover:border-green-300/60 rounded-2xl transition duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default ProductCard;