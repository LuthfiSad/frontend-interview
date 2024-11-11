import { darkModeAtom } from "@features/_global/store/darkMode";
import gsap from "gsap";
import { useAtom } from "jotai";
import { useEffect, useRef, useCallback, useState } from "react";
import CardVideo from "../components/CardVideo";
import { BiSolidFileFind } from "react-icons/bi";
import { Video } from "@core/model/video";
import { MdOutlineDownloading } from "react-icons/md";

const ListVideo: React.FC<{
  videos: Video[];
  handleAddVideos: () => void;
  sampleVideos: Video[];
}> = ({ videos, handleAddVideos, sampleVideos }) => {
  const videoCardRef = useRef<HTMLDivElement | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [isDarkMode] = useAtom(darkModeAtom);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    gsap.set(videoCardRef.current, { translateX: 100, opacity: 0 });
    gsap.to(videoCardRef.current, {
      duration: 1.5,
      translateX: 0,
      opacity: 1,
      delay: 0.5,
      ease: "power4.inOut",
    });
  }, []);

  const fetchMoreVideos = useCallback(async () => {
    if (videos.length >= sampleVideos.length) return;
    setIsLoading(true);
    setTimeout(() => {
      handleAddVideos();
      setIsLoading(false);
    }, 2000);
  }, [handleAddVideos]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchMoreVideos();
        }
      },
      { rootMargin: "100px" }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, [fetchMoreVideos]);

  return (
    <div className={`${isDarkMode && "bg-black"} p-6 w-full mx-auto`}>
      <section
        ref={videoCardRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6"
      >
        {videos.length > 0 ? (
          videos.map((item, index) => <CardVideo key={index} {...item} />)
        ) : (
          <div className="col-span-6 py-10 gap-4 flex flex-col items-center justify-center">
            <BiSolidFileFind className="text-6xl text-gray-500" />
            <p className="text-gray-500">No video found</p>
          </div>
        )}
      </section>
      {isLoading && (
        <div className="py-10 gap-2 flex flex-col items-center justify-center w-full">
          <MdOutlineDownloading className="text-4xl text-gray-500 animate-bounce" />
        </div>
      )}
      {/* Sentinel ditempatkan di luar grid */}
      <div ref={sentinelRef} className="h-1" />
    </div>
  );
};

export default ListVideo;
