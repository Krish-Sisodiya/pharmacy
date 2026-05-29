import { useState } from "react";
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
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-3xl shadow-xl bg-white">
      {/* IMAGE SECTION */}
      <div className="relative w-full h-[280px] sm:h-[400px] lg:h-[520px]">
        {!imgError ? (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setImgError(true)}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          /* FALLBACK when image breaks */
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-200 to-green-400 flex items-center justify-center">
            <span className="text-white text-6xl">💊</span>
          </div>
        )}

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        {/* CONTENT */}
        <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 text-white">
          {/* RATING */}
          <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full mb-2">
            <FaStar className="text-yellow-400 text-[10px]" />
            <span className="font-semibold text-xs">{product.rating} Rating</span>
          </div>

          {/* TITLE */}
          <h2 className="text-lg sm:text-3xl lg:text-4xl font-black leading-tight mb-1 line-clamp-1">
            {product.name}
          </h2>

          {/* DETAILS */}
          <p className="text-gray-200 text-xs sm:text-sm leading-relaxed line-clamp-2">
            {product.details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;