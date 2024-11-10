import React from "react";
import "swiper/swiper-bundle.css"; // Impor CSS Swiper
import FilterSearch from "../components/FilterSearch";
import SwiperHero from "@features/_global/components/SwiperHero";
import ListVideo from "../container/ListVideo";
// import { useSearch } from "@features/_global/hooks/useSearch";

const VideoView: React.FC = () => {
  // const {} = useSearch();

  return (
    <>
      <SwiperHero />
      <FilterSearch />
      <ListVideo />
    </>
  );
};

export default VideoView;
