import { motion } from "framer-motion";

import { FaStar } from "react-icons/fa";

interface Props {
  product: {
    name: string;
    image: string;
    rating: string;
    details: string;
  };
}

const HeroCard = ({ product }: Props) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.4,
      }}
      className="
      relative
      overflow-hidden
      rounded-[35px]
      shadow-[0_20px_60px_rgba(0,0,0,0.15)]
      group
    "
    >

      {/* IMAGE */}
      <div className="relative h-[500px] overflow-hidden">

        <motion.img
          whileHover={{
            scale: 1.08,
          }}
          transition={{
            duration: 0.6,
          }}
          src={product.image}
          alt={product.name}
          className="
          w-full
          h-full
          object-cover
        "
        />

        {/* OVERLAY */}
        <div
          className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/80
          via-black/20
          to-transparent
        "
        ></div>

        {/* CONTENT */}
        <div
          className="
          absolute
          bottom-0
          left-0
          w-full
          p-8
          text-white
        "
        >

          {/* Rating */}
          <div
            className="
            inline-flex
            items-center gap-2
            bg-white/20
            backdrop-blur-md
            px-4 py-2
            rounded-full
            mb-5
          "
          >

            <FaStar className="text-yellow-400" />

            <span className="font-semibold">
              {product.rating} Rating
            </span>

          </div>

          {/* NAME */}
          <h2
            className="
            text-3xl
            lg:text-4xl
            font-black
            mb-4
            leading-tight
          "
          >

            {product.name}

          </h2>

          {/* DETAILS */}
          <p
            className="
            text-gray-200
            leading-relaxed
            text-lg
            max-w-lg
          "
          >

            {product.details}

          </p>

        </div>

      </div>

    </motion.div>
  );
};

export default HeroCard;