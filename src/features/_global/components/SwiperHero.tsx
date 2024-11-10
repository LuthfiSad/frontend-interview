import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import gsap from "gsap";
import sampleVideos from "@core/services/video";
import { Video } from "@core/model/video";
import { MdOutlineDownloading } from "react-icons/md";

const SwiperHero: React.FC = () => {
  const swiperRef = useRef<SwiperRef | null>(null);
  const [randomVideos, setRandomVideos] = useState<Video[]>([]);

  useEffect(() => {
    const shuffledVideos = [...sampleVideos]
      .sort(() => Math.random() - 0.5) // Acak array
      .slice(0, 3); // Ambil 20 video pertama

    setRandomVideos(shuffledVideos);

    gsap.set(swiperRef.current, { scale: 0.5, opacity: 0 });
    gsap.to(swiperRef.current, {
      duration: 1.5,
      scale: 1,
      opacity: 1,
      delay: 0.5,
      ease: "power4.inOut",
    });
  }, []);

  return (
    <section className="relative">
      <Swiper
        modules={[Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        ref={swiperRef}
      >
        {randomVideos.length > 0 ? (
          randomVideos.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={item.thumbnailUrl}
                alt={item.title}
                className="w-full h-96 object-cover"
              />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <div className="py-10 gap-2 flex flex-col items-center justify-center w-full h-96">
              <MdOutlineDownloading className="text-6xl text-gray-500 animate-bounce" />
              <p className="text-gray-500 text-lg font-bold">Loading...</p>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </section>
  );
};

export default SwiperHero;
