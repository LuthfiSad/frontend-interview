import { Video } from "@core/model/video";
import { formatDate } from "@features/_global/helper/FormatTime";
import { darkModeAtom } from "@features/_global/store/darkMode";
import { likesAtom } from "@features/_global/store/likes";
import { useAtom } from "jotai";
import React from "react";
import { BiSolidLike } from "react-icons/bi";
import { FaRegClock } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CardVideo: React.FC<Video> = ({
  title,
  description,
  thumbnailUrl,
  views,
  likes,
  uploadDate,
  category,
  uploader,
  isFavorite,
  id,
}) => {
  const [isDarkMode] = useAtom(darkModeAtom);
  const [prevLikes, setLikes] = useAtom(likesAtom);

  const handleChangeLike = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const newLikes = prevLikes.includes(id)
    ? prevLikes.filter((likeId: string) => likeId !== id)
    : [...prevLikes, id]
      
    localStorage.setItem("likes-video", JSON.stringify(newLikes));
    setLikes(newLikes);
  };

  return (
    <Link
      to={`/detail/${id}`}
      className={`video-card duration-300 hover:-translate-y-1 hover:shadow-2xl relative ${
        isDarkMode ? "bg-gray-800" : "bg-gray-200"
      } rounded-lg shadow-lg overflow-hidden`}
    >
      {/* Video Thumbnail */}
      <img
        src={thumbnailUrl}
        alt="Video Thumbnail"
        className="w-full h-48 object-cover"
      />

      {/* Video Details */}
      <div className="p-4 space-y-2">
        {/* Video Title */}
        <h2
          className={`text-lg font-semibold truncate ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}
        >
          {title}
        </h2>

        {/* Uploader and Upload Date */}
        <div className="flex items-center text-sm text-gray-500">
          <span className={isDarkMode ? "text-blue-300" : "text-blue-600"}>
            {uploader}
          </span>
          <span className="mx-2">•</span>
          <span className="flex items-center space-x-1 text-xs">
            <FaRegClock size={14} />
            <span>{formatDate(uploadDate)}</span>
          </span>
        </div>

        {/* Video Description */}
        <p
          className={`text-sm line-clamp-2 ${
            isDarkMode ? "text-gray-400" : "text-gray-700"
          }`}
        >
          {description}
        </p>

        {/* Views and Category */}
        <div className="flex justify-between items-center mt-2 text-sm">
          <span
            className={`${
              isDarkMode ? "text-blue-300" : "text-blue-500"
            } font-bold`}
          >
            {views} Views
          </span>
          <span
            className={`text-xs ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {category}
          </span>
        </div>

        {/* Like Button and Likes Count */}
        <div className="flex justify-between items-center mt-3">
          <span
            className={`text-sm font-semibold ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {likes} Likes
          </span>
          <button
            onClick={(e) => handleChangeLike(e, id)}
            className={`flex items-center space-x-1 ${
              isFavorite
                ? "text-blue-500"
                : isDarkMode
                ? "text-white hover:text-blue-300"
                : "text-gray-600 hover:text-blue-300"
            } transition`}
          >
            <BiSolidLike />
            <span className="text-sm">{isFavorite ? "Liked" : "Like"}</span>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default CardVideo;
