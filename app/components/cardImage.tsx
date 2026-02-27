import Image from "next/image";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

type CardImageType = {
  image: string;
  description: string;
  title: string;
};

export default function CardImage({
  image,
  description,
  title,
}: CardImageType) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-[#3B3B3B] rounded-xl p-4 w-full shadow-md">
      {/* Image */}
      {loading ? (
        <div className="w-full h-40 rounded-lg overflow-hidden bg-[#4A4A4A] flex items-center justify-center">
          {image ? (
            <Image
              src={image}
              alt={title}
              priority
              onLoad={() => setLoading(false)}
            />
          ) : (
            <PhotoIcon className="w-12 h-12 text-[#6D6767]" />
          )}
        </div>
      ) : (
        <div>
          <p>Loading </p>
        </div>
      )}
      {/* Title */}
      <h2 className="text-white text-lg  font-semibold mt-3">{title}</h2>

      {/* Description */}
      <p className="text-white/70 text-sm mt-1">{description}</p>

      {/* Action Button */}
      <button className="mt-3 w-full py-2 rounded-lg bg-[#F4A261] text-[#312F30] font-semibold hover:bg-[#E76F51] transition-all">
        View Detail
      </button>
    </div>
  );
}
