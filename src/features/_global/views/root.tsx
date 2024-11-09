import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootView: React.FC = () => {
  

  return (
    <div className="bg-gray-50 text-gray-900 font-sans antialiased min-h-screen flex flex-col justify-between">
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
