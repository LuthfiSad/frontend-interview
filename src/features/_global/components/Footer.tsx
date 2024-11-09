import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useAtom } from "jotai";
import { darkModeAtom } from "../hooks/useDarkMode";

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement | null>(null);
  const [isDarkMode] = useAtom(darkModeAtom);

  useEffect(() => {
    if (footerRef.current) {
      gsap.set(footerRef.current, { y: 100, opacity: 0 });
      gsap.to(footerRef.current, {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "bounce",
      });
    }
  }, []);

  return (
    <footer
      ref={footerRef}
      style={{
        boxShadow: isDarkMode
          ? "0 -4px 6px rgba(255, 255, 255, 0.2)"
          : "0 -4px 6px rgba(0, 0, 0, 0.1)"
      }}
      className={`p-5 ${isDarkMode ? "bg-gray-800 text-gray-100 shadow-white" : "bg-gray-50 text-gray-900"} text-center text-sm`}
    >
      © 2024 FiStreaming. All rights reserved.
    </footer>
  );
};

export default Footer;
