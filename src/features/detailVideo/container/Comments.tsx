import { darkModeAtom } from "@features/_global/store/darkMode";
import gsap from "gsap";
import { useAtom } from "jotai";
import React, { useEffect, useRef } from "react";

const Comments: React.FC = () => {
  const commentSectionRef = useRef(null);
  const [isDarkMode] = useAtom(darkModeAtom);

  useEffect(() => {
    gsap.fromTo(
      commentSectionRef.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, ease: "power4.inOut" }
    );
  }, []);

  return (
    <div ref={commentSectionRef} className="space-y-4">
      <h2
        className={`text-2xl font-semibold ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        Comments
      </h2>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Add a comment..."
          className={`flex-grow ${
            isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200"
          } px-4 py-2 rounded-lg text-sm focus:outline-none`}
        />
        <button
          className={`px-4 py-2 rounded-lg text-sm ${
            isDarkMode ? "bg-gray-200 text-black" : "bg-gray-800 text-white"
          }`}
        >
          Post
        </button>
      </div>
      <div className="space-y-4">
        <div
          className={`p-4 rounded-lg shadow-sm ${
            isDarkMode
              ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
              : "bg-white text-gray-700 hover:bg-gray-200"
          }`}
        >
          <div className="flex items-center space-x-3">
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="rounded-full w-10 h-10 object-cover"
            />
            <div>
              <p
                className={`text-sm font-semibold ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                John Doe
              </p>
              <p
                className={`text-xs ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                2 hours ago
              </p>
            </div>
          </div>
          <p className="mt-2">
            This video is so helpful! I've learned a lot about building
            websites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
