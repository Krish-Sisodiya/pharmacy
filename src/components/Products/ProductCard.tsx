// ProductCard.tsx

import { motion } from "framer-motion";

import {
  FaStar,
  FaCapsules,
} from "react-icons/fa";

interface Props {
  product: any;
}

const ProductCard = ({
  product,
}: Props) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.35,
      }}
      className="
      group
      relative
      overflow-hidden
      rounded-[28px]
      bg-white
      shadow-[0_15px_40px_rgba(0,0,0,0.08)]
      border border-green-100
    "
    >

      {/* IMAGE */}
      <div className="relative overflow-hidden">

        {/* IMAGE */}
        <motion.img
          whileHover={{
            scale: 1.06,
          }}
          transition={{
            duration: 0.5,
          }}
          src={product.image}
          alt={product.name}
          className="
          w-full
          h-[280px]
          object-cover
        "
        />

        {/* OVERLAY */}
        <div
          className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/50
          via-transparent
          to-transparent
        "
        ></div>

        {/* ICON */}
        <div
          className="
          absolute
          top-5
          left-5
          w-12
          h-12
          rounded-2xl
          bg-white/20
          backdrop-blur-xl
          border border-white/20
          flex items-center justify-center
          text-white
          text-lg
        "
        >

          <FaCapsules />

        </div>

        {/* RATING */}
        <div
          className="
          absolute
          bottom-5
          right-5
          flex
          items-center gap-2
          bg-white/20
          backdrop-blur-xl
          px-4 py-2
          rounded-full
          text-white
          text-sm
          font-semibold
        "
        >

          <FaStar className="text-yellow-400" />

          {product.rating}

        </div>

      </div>

      {/* CONTENT */}
      <div className="p-6">

        {/* NAME */}
        <h2
          className="
          text-2xl
          font-bold
          text-gray-800
          mb-4
          leading-tight
        "
        >

          {product.name}

        </h2>

        {/* DETAILS */}
        <p
          className="
          text-gray-600
          leading-relaxed
          text-base
        "
        >

          {product.details}

        </p>

      </div>

      {/* HOVER BORDER */}
      <div
        className="
        absolute
        inset-0
        border
        border-transparent
        group-hover:border-green-300/50
        rounded-[28px]
        transition duration-500
      "
      ></div>

    </motion.div>
  );
};

export default ProductCard;