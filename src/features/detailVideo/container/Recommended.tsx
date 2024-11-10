import React, { useEffect, useRef } from "react";
import { darkModeAtom } from "@features/_global/hooks/useDarkMode";
import { useAtom } from "jotai";
import gsap from "gsap";

const Recommended: React.FC = () => {
  const recommendedSectionRef = useRef(null);
  const [isDarkMode] = useAtom(darkModeAtom);

  useEffect(() => {
    gsap.fromTo(
      recommendedSectionRef.current,
      { opacity: 0, translateX: 100 },
      { opacity: 1, translateX: 0, duration: 0.5, stagger: 0.3 }
    );
  }, []);

  return (
    <div ref={recommendedSectionRef} className="max-w-sm w-full space-y-4">
      <h2 className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-black"}`}>Recommended Videos</h2>
      <div className="space-y-4">
        <a
          href="detail.html"
          className="video-card gap-2 rounded-lg flex hover:translate-y-[-5px] transition-all duration-200"
        >
          <img
            src="https://via.placeholder.com/400x225"
            alt="Video Thumbnail"
            className="w-full cursor-pointer max-w-40 max-h-24 h-full object-cover rounded-lg"
          />
          <div className="space-y-1">
            <h3 className={`text-sm font-semibold ${isDarkMode ? "text-white" : "text-black"}`}>Build a Responsive Layout</h3>
            <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              Learn how to create a responsive layout with CSS Flexbox.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Recommended