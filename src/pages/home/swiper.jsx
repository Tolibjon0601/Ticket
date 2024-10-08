import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

function MainSwiper() {
  const swiperRef = useRef(null); // Create a ref for the Swiper instance

  const { data: movies, isLoading, error } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const response = await axios.get("https://66ceca18901aab24841f8da1.mockapi.io/api/ecomerce");
      return response.data;
    },
  });

  if (isLoading) {
    return <div className="flex justify-center items-center h-[400px]">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-[400px] text-red-700 uppercase">{error.message}</div>;
  }

  return (
    <div className="container  pt-[116px] relative">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <div className="h-[492px] flex flex-col justify-between">
                <img src={movie.image} alt={movie.title} className="w-[280px] h-[392px] rounded-xl mb-2 object-cover" />
                <div className="text-center">
                  <h2 className="font-medium text-2xl text-white">{movie.title}</h2>
                  <p className="text-white text-sm font-medium mt-2">{movie.description}</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>


      <img
        src="./image/arrow-left.svg"
        alt=""
        className="swiper-button-prev cursor-pointer "
        onClick={() => swiperRef.current.swiper.slidePrev()}
      />
      <img
        src="./image/arrow-right.svg"
        alt=""
        className="swiper-button-next cursor-pointer mr-auto"
        onClick={() => swiperRef.current.swiper.slideNext()}
      />
    </div>
  );
}

export default MainSwiper;
