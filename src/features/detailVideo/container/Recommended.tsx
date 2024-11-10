import React, { useEffect, useRef, useState } from "react";
import { darkModeAtom } from "@features/_global/store/darkMode";
import { useAtom } from "jotai";
import gsap from "gsap";
import sampleVideos from "@core/services/video";
import { MdOutlineDownloading } from "react-icons/md";
import CardRecommended from "../components/CardRecommended";
import { Video } from "@core/model/video";

const Recommended: React.FC<{ id: string }> = ({ id }) => {
  const recommendedSectionRef = useRef(null);
  const [isDarkMode] = useAtom(darkModeAtom);
  const [randomVideos, setRandomVideos] = useState<Video[]>([]);

  useEffect(() => {
    const shuffledVideos = [...sampleVideos]
      .sort(() => Math.random() - 0.5) // Acak array
      .slice(0, 20); // Ambil 20 video pertama

    setRandomVideos(shuffledVideos);

    gsap.fromTo(
      recommendedSectionRef.current,
      { opacity: 0, translateX: 100 },
      { opacity: 1, translateX: 0, duration: 0.5, stagger: 0.3 }
    );
  }, [id]);

  return (
    <div ref={recommendedSectionRef} className="max-w-sm w-full space-y-4">
      <h2
        className={`text-xl font-semibold ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        Recommended Videos
      </h2>
      <div className="space-y-4">
        {randomVideos.length > 0 ? (
          randomVideos.map((video) => (
            <CardRecommended key={video.id} {...video} />
          ))
        ) : (
          <div className="py-10 gap-2 flex flex-col items-center justify-center w-full h-full">
            <MdOutlineDownloading className="text-6xl text-gray-500 animate-bounce" />
            <p className="text-gray-500 text-lg font-bold">Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recommended;
