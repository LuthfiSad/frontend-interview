import { darkModeAtom } from "@features/_global/store/darkMode";
import { useAtom } from "jotai";
import React from "react";
import { BiSolidLike } from "react-icons/bi";
import { FaShareFromSquare } from "react-icons/fa6";

const ButtonAction: React.FC = () => {
  const [isDarkMode] = useAtom(darkModeAtom);
  return (
    <div className="flex items-center space-x-4">
      <button
        className={`flex items-center space-x-2 ${
          isDarkMode
            ? "text-blue-400 hover:text-blue-500"
            : "text-blue-500 hover:text-blue-700"
        }`}
      >
        <BiSolidLike />
        <span>Like</span>
      </button>
      <button
        className={`flex items-center space-x-2 ${
          isDarkMode
            ? "text-gray-400 hover:text-gray-300"
            : "text-gray-600 hover:text-gray-800"
        }`}
      >
        <FaShareFromSquare />
        <span>Share</span>
      </button>
    </div>
  );
};

export default ButtonAction;
