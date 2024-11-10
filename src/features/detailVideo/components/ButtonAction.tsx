import { Video } from "@core/model/video";
import { formatSubscriber } from "@features/_global/helper/FormatSubscriber";
import { darkModeAtom } from "@features/_global/store/darkMode";
import { likesAtom } from "@features/_global/store/likes";
import { useAtom } from "jotai";
import React from "react";
import { BiSolidLike } from "react-icons/bi";
import { FaShareFromSquare } from "react-icons/fa6";

const ButtonAction: React.FC<Video> = ({ id, likes, isFavorite }) => {
  const [prevLikes, setLikes] = useAtom(likesAtom);
  const [isDarkMode] = useAtom(darkModeAtom);

  const handleChangeLike = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => {
    e.preventDefault();
    const newLikes = prevLikes.includes(id)
      ? prevLikes.filter((likeId: string) => likeId !== id)
      : [...prevLikes, id];

    localStorage.setItem("likes-video", JSON.stringify(newLikes));
    setLikes(newLikes);
  };
  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={(e) => handleChangeLike(e, id)}
        className={`flex items-center space-x-2 ${
          isFavorite
            ? "text-blue-500"
            : isDarkMode
            ? "text-white hover:text-blue-300"
            : "text-gray-600 hover:text-blue-300"
        }`}
      >
        <BiSolidLike />
        <span>Like {formatSubscriber(likes)}</span>
      </button>
      <button
        className={`flex items-center space-x-2 ${
          isDarkMode
            ? "text-white hover:text-blue-300"
            : "text-gray-600 hover:text-blue-300"
        }`}
      >
        <FaShareFromSquare />
        <span>Share</span>
      </button>
    </div>
  );
};

export default ButtonAction;
