import { darkModeAtom } from "@features/_global/store/darkMode";
import gsap from "gsap";
import { useAtom } from "jotai";
import React, { useEffect, useRef } from "react";

const VideoDetail: React.FC = () => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const [isDarkMode] = useAtom(darkModeAtom);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3 }
    );
    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );
  }, []);

  return (
    <div className="space-y-4">
      <h1
        ref={titleRef}
        className={`text-3xl font-semibold ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        Video Title - How to Build a Website
      </h1>
      <div
        className={`flex items-center space-x-4 ${
          isDarkMode ? "text-gray-400" : "text-gray-500"
        }`}
      >
        <span className="text-sm">Published on: August 1, 2024</span>
        <span className="text-sm">By: FiStreaming Studio</span>
        <span className="text-sm">3M Views</span>
      </div>
      <p
        ref={descriptionRef}
        className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} text-lg`}
      >
        In this tutorial, we will walk you through the steps of creating a
        modern website from scratch using HTML, CSS, and JavaScript.
      </p>
    </div>
  );
};

export default VideoDetail;
