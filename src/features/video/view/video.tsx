import React, { useEffect, useState } from "react";
import "swiper/swiper-bundle.css"; // Impor CSS Swiper
import FilterSearch from "../components/FilterSearch";
import SwiperHero from "@features/_global/components/SwiperHero";
import ListVideo from "../container/ListVideo";
import { useSearch } from "@features/_global/hooks/useSearch";
import sampleVideos from "@core/services/video";
import { Video } from "@core/model/video";
import { useAtom } from "jotai";
import { likesAtom } from "@features/_global/store/likes";

const VideoView: React.FC = () => {
  const { searchQuery, directionQuery, filterByQuery, orderByQuery } =
    useSearch();
  const [videosData, setVideosData] = useState<Video[]>([]);
  const [likes] = useAtom(likesAtom);

  const handleShuffledVideos = () => {
    const uniqueVideos = sampleVideos.filter(
      (video) => !videosData.some((existingVideo) => existingVideo.id === video.id)
    );
    const shuffledVideos = uniqueVideos
      .sort(() => Math.random() - 0.5)
      .slice(0, 30);
    return shuffledVideos;
  };

  useEffect(() => {
    const shuffledVideos = handleShuffledVideos();
    const searchResult = shuffledVideos.filter((video) =>
      video.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredResult = filterByQuery
      ? searchResult.filter(
          (video) =>
            video.category.toLowerCase() === filterByQuery.toLowerCase() ||
            video.uploader.toLowerCase() === filterByQuery.toLowerCase()
        )
      : searchResult;

    const sortedResult = filteredResult.sort((a, b) => {
      if (orderByQuery === "views") {
        return a.views - b.views;
      } else if (orderByQuery === "likes") {
        return a.likes - b.likes;
      } else if (orderByQuery === "createdAt") {
        return a.uploadDate.getTime() - b.uploadDate.getTime();
      }
      return 0;
    });

    if (directionQuery === "desc") {
      setVideosData(sortedResult.reverse());
    } else {
      setVideosData(sortedResult);
    }
  }, [searchQuery, directionQuery, filterByQuery, orderByQuery]);

  const handleAddVideos = () => {
    const shuffledVideos = handleShuffledVideos();
    setVideosData((prevVideos) => [...prevVideos, ...shuffledVideos]);
  };

  useEffect(() => {
    setVideosData((prevVideos) =>
      prevVideos.map((video) => ({
        ...video,
        isFavorite: likes.includes(video.id),
        likes: video.likes + (likes.includes(video.id) ? 1 : video.isFavorite ? -1 : 0),
      }))
    );
  }, [likes]);

  return (
    <>
      <SwiperHero />
      <FilterSearch />
      <ListVideo videos={videosData} handleAddVideos={handleAddVideos} sampleVideos={sampleVideos} />
    </>
  );
};

export default VideoView;
