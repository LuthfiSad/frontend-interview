import { Video } from "@core/model/video";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const VideoPlayer: React.FC<Video> = ({
  thumbnailUrl,
  videoUrl
}) => {
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
            src={thumbnailUrl}
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
          src={videoUrl}
          allowFullScreen
        />
      )}
    </div>
  );
};

export default VideoPlayer;
