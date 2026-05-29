import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface Props {
  category: {
    name: string;
    image: string;
  };
}

const CategoryCard = ({ category }: Props) => {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      onClick={() => navigate(`/category/${category.name}`)}
      className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-md"
    >
      {/* IMAGE CONTAINER */}
      <div className="relative h-[200px] sm:h-[240px] lg:h-[260px] overflow-hidden">

        {/* IMAGE */}
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

        {/* GLOW */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-green-400/25 blur-[60px] rounded-full" />

        {/* BOTTOM CONTENT */}
        <div className="absolute bottom-0 left-0 w-full p-4 sm:p-5">

          {/* PILL TAG */}
          <span className="inline-block bg-green-500/20 backdrop-blur-sm border border-green-400/30 text-green-300 text-[10px] font-semibold px-2.5 py-0.5 rounded-full mb-2 uppercase tracking-wider">
            Category
          </span>

          <h2 className="text-white text-base sm:text-xl font-bold leading-tight drop-shadow-lg group-hover:translate-x-1 transition-transform duration-300">
            {category.name}
          </h2>

          {/* ARROW */}
          <div className="flex items-center gap-1 mt-1.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <span className="text-green-400 text-xs font-semibold">Explore</span>
            <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>

        </div>
      </div>

      {/* HOVER BORDER */}
      <div className="absolute inset-0 border border-transparent group-hover:border-green-400/40 rounded-2xl transition-all duration-500" />
    </motion.div>
  );
};

export default CategoryCard;