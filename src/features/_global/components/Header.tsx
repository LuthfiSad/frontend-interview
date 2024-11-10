import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useAtom } from "jotai";
import { darkModeAtom } from "../store/darkMode";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useAtom(darkModeAtom);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.set(headerRef.current, { y: -100, opacity: 0 });
      gsap.to(headerRef.current, {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "bounce",
      });
    }
  }, []);

  useEffect(() => {
    // Cek preferensi dari localStorage pada saat load pertama
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setIsDarkMode(savedMode === "true");
    }
  }, [setIsDarkMode]);

  return (
    <header
      ref={headerRef}
      style={{
        boxShadow: isDarkMode
          ? "0 4px 6px rgba(255, 255, 255, 0.2)"
          : "0 4px 6px rgba(0, 0, 0, 0.2)"
      }}
      className={`flex items-center justify-between p-4 ${isDarkMode ? "bg-gray-800 text-gray-100" : "bg-gray-50 text-gray-900"}`}
    >
      <h1 className="text-xl font-bold">FiStreaming</h1>
      <div className="flex items-center space-x-4">
        {isDarkMode ? (
          <MdLightMode
            className="w-6 h-6 text-[#ffcf0d] cursor-pointer"
            onClick={() => {
              setIsDarkMode(false);
              localStorage.setItem("darkMode", "false");
            }}
          />
        ) : (
          <MdDarkMode
            className="w-6 h-6 text-black cursor-pointer"
            onClick={() => {
              setIsDarkMode(true);
              localStorage.setItem("darkMode", "true");
            }}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
