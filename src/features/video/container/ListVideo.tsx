import { darkModeAtom } from "@features/_global/store/darkMode";
import gsap from "gsap";
import { useAtom } from "jotai";
import { useEffect, useRef } from "react";
import CardVideo from "../components/CardVideo";
import { BiSolidFileFind } from "react-icons/bi";
import { Video } from "@core/model/video";

const ListVideo: React.FC<{ videos: Video[] }> = ({ videos }) => {
  const videoCardRef = useRef<HTMLDivElement | null>(null);
  const [isDarkMode] = useAtom(darkModeAtom);

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

  return (
    <section
      ref={videoCardRef}
      className={`${
        isDarkMode && "bg-black"
      } p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 w-full mx-auto`}
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
  );
};

export default ListVideo;
