import { darkModeAtom } from "@features/_global/hooks/useDarkMode";
import { useAtom } from "jotai";
import React, { useState } from "react";
import { BiSolidLike } from "react-icons/bi";
import { Link } from "react-router-dom";

const CardVideo: React.FC = () => {
  const [isDarkMode] = useAtom(darkModeAtom);
  const [like, setLike] = useState(false);

  const handleChangeLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLike(!like);
  };

  return (
    <Link
      to="/detail/1"
      className={`video-card duration-300 hover:-translate-y-1 hover:shadow-2xl relative ${
        isDarkMode ? "bg-gray-800" : "bg-gray-200"
      } rounded-lg shadow-lg overflow-hidden`}
    >
      <img
        src="https://via.placeholder.com/300x200"
        alt="Video Thumbnail"
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col space-y-2">
        <h2
          className={`text-lg font-semibold truncate ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Video Title
        </h2>
        <p className="text-sm text-gray-500 truncate">
          Short description of the video.
        </p>
        <div className="flex justify-between items-center mt-2">
          <span
            className={`${
              isDarkMode ? "text-blue-500" : "text-blue-500"
            } font-bold text-sm`}
          >
            1.2M Views
          </span>
          <button
            onClick={handleChangeLike}
            className={`${
              like
                ? "text-blue-500"
                : isDarkMode
                ? "text-white hover:text-blue-300"
                : "text-gray-600 hover:text-blue-300"
            } transition`}
          >
            <BiSolidLike />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default CardVideo;
