import React from "react";
import { useAtom } from "jotai";
import { darkModeAtom } from "@features/_global/hooks/useDarkMode";
import Recommended from "../container/Recommended";
import ButtonAction from "../components/ButtonAction";
import VideoPlayer from "../components/VideoPlayer";
import VideoDetail from "../components/VideoDetail";
import Comments from "../container/Comments";

const DetailVideoView: React.FC = () => {
  const [isDarkMode] = useAtom(darkModeAtom);

  return (
    <section
      className={`${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } max-w-[1400px] mx-auto p-6 space-y-6 flex gap-6 flex-col lg:flex-row`}
    >
      <div className="w-full space-y-4">
        <VideoPlayer />
        <VideoDetail />
        <ButtonAction />
        <Comments />
      </div>
      <Recommended />
    </section>
  );
};

export default DetailVideoView;
