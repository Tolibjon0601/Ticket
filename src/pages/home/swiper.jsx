import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ToastContainer } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

function MainSwiper() {

  const { data: movies, isLoading, error } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const response = await axios.get(
        "https://66ceca18901aab24841f8da1.mockapi.io/api/ecomerce"
      );
      return response.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[400px]">
        <p>........Loader........</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-[400px] text-red-700 uppercase">
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className="container pl-9 pt-[116px] relative">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={3}
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
              <div className="h-auto">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-[380px] max-h-[200px] rounded-xl mb-2 object-cover"
                />
                <h2 className="font-medium text-2xl text-white">
                  {movie.title}
                </h2>
                <p className="text-white text-sm font-medium mt-2">
                  {movie.description}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <ToastContainer />
    </div>
  );
}

export default MainSwiper;
