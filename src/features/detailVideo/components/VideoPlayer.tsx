import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const VideoPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoPlayerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      videoPlayerRef.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, ease: "power4.inOut" }
    );
  }, []);

  return (
    <div ref={videoPlayerRef}>
      {!isPlaying ? (
        <div
          className="relative cursor-pointer"
          onClick={() => setIsPlaying(true)}
        >
          {/* Thumbnail Image */}
          <img
            src="https://via.placeholder.com/800x400" // Ganti dengan URL thumbnail video yang sesungguhnya
            alt="Video Thumbnail"
            className="w-full h-[400px] object-cover"
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <button className="text-white text-4xl">▶</button>
          </div>
        </div>
      ) : (
        <iframe
          width="100%"
          height={400}
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default VideoPlayer;
