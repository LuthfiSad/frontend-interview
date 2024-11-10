import React, { useEffect, useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import gsap from "gsap";

const SwiperHero: React.FC = () => {
  const swiperRef = useRef<SwiperRef | null>(null);

  useEffect(() => {
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
        <SwiperSlide>
          <img
            src="https://via.placeholder.com/1200x500"
            alt="Video Thumbnail 1"
            className="w-full h-96 object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://via.placeholder.com/1200x500"
            alt="Video Thumbnail 2"
            className="w-full h-96 object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://via.placeholder.com/1200x500"
            alt="Video Thumbnail 3"
            className="w-full h-96 object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SwiperHero;
