import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { darkModeAtom } from "@features/_global/store/darkMode";
import Recommended from "../container/Recommended";
import ButtonAction from "../components/ButtonAction";
import VideoPlayer from "../components/VideoPlayer";
import VideoDetail from "../components/VideoDetail";
import Comments from "../container/Comments";
import { Link, useParams } from "react-router-dom";
import { Video } from "@core/model/video";
import { MdOutlineDownloading } from "react-icons/md";
import sampleVideos from "@core/services/video";
import { BiSolidFileFind } from "react-icons/bi";
import { likesAtom } from "@features/_global/store/likes";

const DetailVideoView: React.FC = () => {
  const { id } = useParams();
  const [video, setVideo] = useState<Video | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode] = useAtom(darkModeAtom);
  const [likes] = useAtom(likesAtom);

  useEffect(() => {
    setVideo(sampleVideos.find((video) => video.id === id) || null);
    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    setVideo(
      (prevVideo) =>
        prevVideo && {
          ...prevVideo,
          isFavorite: likes.includes(prevVideo.id),
          likes:
            prevVideo.likes +
            (likes.includes(prevVideo.id) ? 1 : prevVideo.isFavorite ? -1 : 0),
        }
    );
  }, [likes]);

  return (
    <section
      className={`${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } max-w-[1400px] mx-auto p-6 space-y-6 flex gap-6 flex-col lg:flex-row flex-1 w-full relative`}
    >
      {video ? (
        <>
          <div className="w-full space-y-4">
            <VideoPlayer {...video} />
            <VideoDetail {...video} />
            <ButtonAction {...video} />
            <Comments />
          </div>
          <Recommended id={id as string} />
        </>
      ) : isLoading ? (
        <div className="py-10 gap-2 flex flex-col items-center justify-center absolute bottom-0 right-0 left-0 top-0">
          <MdOutlineDownloading className="text-6xl text-gray-500 animate-bounce" />
          <p className="text-gray-500 text-lg font-bold">Loading...</p>
        </div>
      ) : (
        <div className="py-10 gap-2 flex flex-col items-center justify-center absolute bottom-0 right-0 left-0 top-0">
          <BiSolidFileFind className="text-6xl text-gray-500" />
          <div className="flex items-center justify-center">
            <p className="text-gray-500 text-lg font-bold">No video found</p>
            <Link to="/" className="text-blue-500 hover:underline ml-2">
              Back
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default DetailVideoView;
