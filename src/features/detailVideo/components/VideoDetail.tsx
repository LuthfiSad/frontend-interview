import { Video } from "@core/model/video";
import { formatSubscriber } from "@features/_global/helper/FormatSubscriber";
import { formatDate } from "@features/_global/helper/FormatTime";
import { darkModeAtom } from "@features/_global/store/darkMode";
import gsap from "gsap";
import { useAtom } from "jotai";
import React, { useEffect, useRef, useState } from "react";

const VideoDetail: React.FC<Video> = ({
  id,
  title,
  uploadDate,
  description,
  uploader,
  views,
}) => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const [isDarkMode] = useAtom(darkModeAtom);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(false);
  }, [id]);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3 }
    );
    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );
  }, []);

  return (
    <div className="space-y-4">
      <h1
        ref={titleRef}
        className={`text-3xl font-semibold ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h1>
      <div
        className={`flex items-center space-x-4 ${
          isDarkMode ? "text-gray-400" : "text-gray-500"
        }`}
      >
        <span className="text-sm">Published on: {formatDate(uploadDate)}</span>
        <span className="text-sm">By: {uploader}</span>
        <span className="text-sm">{formatSubscriber(views)} Views</span>
      </div>
      <p
        ref={descriptionRef}
        className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} text-lg`}
      >
        {expanded ? description : `${description.slice(0, 200)}`}
        {!expanded && description.length > 200 && (
          <button
            className="text-blue-500 ml-2 cursor-pointer hover:text-blue-300"
            onClick={() => setExpanded(true)}
          >
            Read more...
          </button>
        )}
      </p>
      {expanded && (
        <button
          className="text-blue-500 cursor-pointer hover:text-blue-300"
          onClick={() => {
            setExpanded(false);
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          Show less
        </button>
      )}
    </div>
  );
};

export default VideoDetail;
