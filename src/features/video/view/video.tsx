import React, { useEffect, useState } from "react";
import "swiper/swiper-bundle.css"; // Impor CSS Swiper
import FilterSearch from "../components/FilterSearch";
import SwiperHero from "@features/_global/components/SwiperHero";
import ListVideo from "../container/ListVideo";
import { useSearch } from "@features/_global/hooks/useSearch";
import sampleVideos from "@core/services/video";
import { Video } from "@core/model/video";

const VideoView: React.FC = () => {
  const { searchQuery, directionQuery, filterByQuery, orderByQuery } =
    useSearch();
  const [videosData, setVideosData] = useState<Video[]>([]);

  useEffect(() => {
    const searchResult = sampleVideos.filter((video) =>
      video.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log({searchResult});

    const filteredResult = filterByQuery ? searchResult.filter(
      (video) =>
        video.category.toLowerCase() === filterByQuery.toLowerCase() ||
        video.uploader.toLowerCase() === filterByQuery.toLowerCase()
    ) : searchResult;
    console.log({filteredResult});

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
    console.log({sortedResult});

    if (directionQuery === "desc") {
      setVideosData(sortedResult.reverse());
    } else {
      setVideosData(sortedResult);
    }
  }, [searchQuery, directionQuery, filterByQuery, orderByQuery]);

  useEffect(() => {
    console.log({videosData});
  }, [videosData]);

  return (
    <>
      <SwiperHero />
      <FilterSearch />
      <ListVideo videos={videosData} />
    </>
  );
};

export default VideoView;
