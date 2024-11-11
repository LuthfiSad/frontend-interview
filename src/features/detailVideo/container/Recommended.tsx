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
  const [finalRandom, setFinalRandom] = useState(false);

  const handleShuffledVideos = (videos: Video[]) => {
    const uniqueVideos = sampleVideos.filter(
      (video) => !videos.some((existingVideo) => existingVideo.id === video.id)
    );
    const shuffledVideos = uniqueVideos
      .sort(() => Math.random() - 0.5)
      .slice(0, 30);
    return shuffledVideos;
  };

  useEffect(() => {
    setFinalRandom(false);
    const shuffledVideos = handleShuffledVideos(randomVideos);

    setRandomVideos(shuffledVideos);

    gsap.fromTo(
      recommendedSectionRef.current,
      { opacity: 0, translateX: 100 },
      { opacity: 1, translateX: 0, duration: 0.5, stagger: 0.3 }
    );
  }, [id]);

  const handleAddRandomVideos = (videos: Video[]) => {
    const shuffledVideos = handleShuffledVideos(videos);

    setRandomVideos([...videos, ...shuffledVideos]);

    if ([...videos, ...shuffledVideos].length >= 50) {
      setFinalRandom(true);
    }
  };

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
          randomVideos.map((video, index) => (
            <CardRecommended key={index} {...video} />
          ))
        ) : (
          <div className="py-10 gap-2 flex flex-col items-center justify-center w-full h-full">
            <MdOutlineDownloading className="text-6xl text-gray-500 animate-bounce" />
            <p className="text-gray-500 text-lg font-bold">Loading...</p>
          </div>
        )}
        {!finalRandom ? (
          <div className="flex justify-center">
            <button
              onClick={() => handleAddRandomVideos(randomVideos)}
              className={`flex items-center space-x-2 border px-2 rounded-full shadow-md ${
                isDarkMode
                  ? "border-white hover:bg-gray-800"
                  : "border-black hover:bg-gray-300"
              }`}
            >
              Show More
            </button>
          </div>
        ) : (
          <div className="w-full bg-gray-400 py-2 flex items-center justify-center">
            <p>No more recommended videos</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recommended;
