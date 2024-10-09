import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const MySwiper = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<div className="relative">
			<Swiper

				loop={true}
				spaceBetween={10}
				navigation={true}
				autoplay={{
					delay: 3000,
					pauseOnMouseEnter: true,
					disableOnInteraction: false,
				}}
				thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
				modules={[FreeMode, Navigation, Thumbs]}
				className="mySwiper2"

			>
				<SwiperSlide>
					<img src="./image/main_swiperImg.svg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/29014e55-047e-42a5-b29e-d9fc261a5f34/dh4gllh-0c9dcc3e-d1c2-473f-94ef-eb10d17f3e7f.png/v1/fill/w_1920,h_955,q_80,strp/kung_fu_panda_4_rewrite__re_edited__by_through_the_movies_dh4gllh-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTU1IiwicGF0aCI6IlwvZlwvMjkwMTRlNTUtMDQ3ZS00MmE1LWIyOWUtZDlmYzI2MWE1ZjM0XC9kaDRnbGxoLTBjOWRjYzNlLWQxYzItNDczZi05NGVmLWViMTBkMTdmM2U3Zi5wbmciLCJ3aWR0aCI6Ijw9MTkyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.S3kDvxpmWLnAQl5Zve8EPglT9LhqaVF2RQb53jU-uDQ"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img src="./image/main_swiperImg.svg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/29014e55-047e-42a5-b29e-d9fc261a5f34/dh4gllh-0c9dcc3e-d1c2-473f-94ef-eb10d17f3e7f.png/v1/fill/w_1920,h_955,q_80,strp/kung_fu_panda_4_rewrite__re_edited__by_through_the_movies_dh4gllh-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTU1IiwicGF0aCI6IlwvZlwvMjkwMTRlNTUtMDQ3ZS00MmE1LWIyOWUtZDlmYzI2MWE1ZjM0XC9kaDRnbGxoLTBjOWRjYzNlLWQxYzItNDczZi05NGVmLWViMTBkMTdmM2U3Zi5wbmciLCJ3aWR0aCI6Ijw9MTkyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.S3kDvxpmWLnAQl5Zve8EPglT9LhqaVF2RQb53jU-uDQ"
						alt=""
					/>
				</SwiperSlide>
			</Swiper>

			<Swiper
				onSwiper={setThumbsSwiper}
				loop={true}
				spaceBetween={10}
				slidesPerView={4}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[FreeMode, Navigation, Thumbs]}
				className="mySwiper"
				style={{ width: '50%', height: '120%'}}
			>
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
				<SwiperSlide>
					<img src="./image/main_swiperImg.svg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/29014e55-047e-42a5-b29e-d9fc261a5f34/dh4gllh-0c9dcc3e-d1c2-473f-94ef-eb10d17f3e7f.png/v1/fill/w_1920,h_955,q_80,strp/kung_fu_panda_4_rewrite__re_edited__by_through_the_movies_dh4gllh-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTU1IiwicGF0aCI6IlwvZlwvMjkwMTRlNTUtMDQ3ZS00MmE1LWIyOWUtZDlmYzI2MWE1ZjM0XC9kaDRnbGxoLTBjOWRjYzNlLWQxYzItNDczZi05NGVmLWViMTBkMTdmM2U3Zi5wbmciLCJ3aWR0aCI6Ijw9MTkyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.S3kDvxpmWLnAQl5Zve8EPglT9LhqaVF2RQb53jU-uDQ"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img src="./image/main_swiperImg.svg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/29014e55-047e-42a5-b29e-d9fc261a5f34/dh4gllh-0c9dcc3e-d1c2-473f-94ef-eb10d17f3e7f.png/v1/fill/w_1920,h_955,q_80,strp/kung_fu_panda_4_rewrite__re_edited__by_through_the_movies_dh4gllh-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTU1IiwicGF0aCI6IlwvZlwvMjkwMTRlNTUtMDQ3ZS00MmE1LWIyOWUtZDlmYzI2MWE1ZjM0XC9kaDRnbGxoLTBjOWRjYzNlLWQxYzItNDczZi05NGVmLWViMTBkMTdmM2U3Zi5wbmciLCJ3aWR0aCI6Ijw9MTkyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.S3kDvxpmWLnAQl5Zve8EPglT9LhqaVF2RQb53jU-uDQ"
						alt=""
					/>
				</SwiperSlide>
			</Swiper>


			<div className="absolute  top-[430px]">
    <h1 className="mb-4 text-base">Kung Fu Panda 4</h1>
    <ul className="flex gap-[6px] mb-4">
        <li>
            <p className="text-medium text-[16px] ">2024</p>
        </li>
        <li>
            <p className="text-medium text-[16px] ">•</p>
        </li>
        <li>
            <p className="text-medium text-[16px] ">RU</p>
        </li>
        <li>
            <p className="text-medium text-[16px] ">•</p>
        </li>
        <li>
            <p className="text-medium text-[16px] ">18+</p>
        </li>
        <li>
            <p className="text-medium text-[16px] ">•</p>
        </li>
        <li>
            <p className="text-medium text-[16px] ">2ч 56м / 176 минут</p>
        </li>
    </ul>
    <button className="py-4 px-[137px] bg-white flex text-main_color text-medium gap-2 rounded-xl">
        <img src="./image/watch-icon.svg" alt="" />Смотреть
    </button>
</div>

		</div>
	);
};

export default MySwiper;
