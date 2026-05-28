import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

interface Props {
  category: {
    name: string;
    image: string;
  };
}

const CategoryCard = ({
  category,
}: Props) => {

  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      onClick={() =>
        navigate(
          `/category/${category.name}`
        )
      }
      className="
      group
      relative
      overflow-hidden
      rounded-[24px]
      cursor-pointer
      shadow-lg
    "
    >

      {/* IMAGE CONTAINER */}
      <div className="relative h-[260px] overflow-hidden">

        {/* IMAGE */}
        <motion.img
          whileHover={{
            scale: 1.06,
          }}
          transition={{
            duration: 0.5,
          }}
          src={category.image}
          alt={category.name}
          className="
          w-full
          h-full
          object-cover
          transition duration-500
        "
        />

        {/* OVERLAY */}
        <div
          className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/70
          via-black/10
          to-transparent
        "
        ></div>

        {/* LIGHT GLOW */}
        <div
          className="
          absolute
          top-0
          right-0
          w-28
          h-28
          bg-green-400/20
          blur-[70px]
          rounded-full
        "
        ></div>

        {/* CATEGORY NAME */}
        <div
          className="
          absolute
          bottom-0
          left-0
          w-full
          p-5
        "
        >

          <motion.h2
            whileHover={{
              x: 3,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
            text-white
            text-2xl
            font-bold
            leading-tight
            drop-shadow-xl
          "
          >

            {category.name}

          </motion.h2>

        </div>

      </div>

      {/* HOVER BORDER */}
      <div
        className="
        absolute
        inset-0
        border
        border-transparent
        group-hover:border-green-300/50
        rounded-[24px]
        transition duration-500
      "
      ></div>

    </motion.div>
  );
};

export default CategoryCard;