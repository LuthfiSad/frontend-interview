import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { darkModeAtom } from "../store/darkMode";
import { useAtom } from "jotai";

const RootView: React.FC = () => {
  const [isDarkMode] = useAtom(darkModeAtom)
  

  return (
    <div className={`${isDarkMode ? "bg-black" : "bg-white"} font-sans antialiased min-h-screen flex flex-col justify-between`}>
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      {/* <ScrollRestoration /> */}
      <Footer />
    </div>
  );
};

export default RootView;
