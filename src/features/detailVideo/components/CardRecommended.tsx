import { Video } from "@core/model/video";
import { darkModeAtom } from "@features/_global/store/darkMode";
import { useAtom } from "jotai";
import React from "react";
import { Link } from "react-router-dom";

const CardRecommended: React.FC<Video> = ({
  id,
  title,
  thumbnailUrl,
  description,
}) => {
  const [isDarkMode] = useAtom(darkModeAtom);
  return (
    <Link
      to={`/detail/${id}`}
      className="gap-2 rounded-lg flex hover:translate-y-[-5px] transition-all duration-200"
    >
      <img
        src={thumbnailUrl}
        alt={title}
        className="w-full cursor-pointer max-w-40 max-h-24 h-full object-cover rounded-lg"
      />
      <div className="space-y-1 w-full overflow-hidden">
        <h3
          className={`text-sm font-semibold ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-sm line-clamp-2 ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      </div>
    </Link>
  );
};

export default CardRecommended;
