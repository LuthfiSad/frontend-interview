import gsap from "gsap";
import { useEffect, useRef } from "react";
import { MdLightMode } from "react-icons/md";

const ListVideo = () => {
  const videoCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.set(videoCardRef.current, { translateY: 100, opacity: 0 });
    gsap.to(videoCardRef.current, {
      duration: 1.5,
      translateY: 0,
      opacity: 1,
      delay: 0.5,
      ease: "power4.inOut",
    });
  }, []);
  
  return (
    <section
      ref={videoCardRef}
      className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 w-full mx-auto"
    >
      <a
        href="detail.html"
        className="video-card duration-300 hover:-translate-y-1 hover:shadow-2xl relative bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
      >
        <img
          src="https://via.placeholder.com/300x200"
          alt="Video Thumbnail"
          className="w-full h-48 object-cover"
        />
        <div className="p-4 flex flex-col space-y-2">
          <h2 className="text-lg font-semibold truncate">Video Title</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
            Short description of the video.
          </p>
          <div className="flex justify-between items-center mt-2">
            <span className="text-indigo-500 font-bold text-sm">
              1.2M Views
            </span>
            <button className="text-gray-600 dark:text-gray-300 hover:text-red-500 transition">
              <MdLightMode />
            </button>
          </div>
        </div>
      </a>
    </section>
  );
};

export default ListVideo;
