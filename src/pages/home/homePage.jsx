import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import ToggleBtn from "./toggleBtn";

const MySwiper = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<>
			<Swiper
				style={{
					"--swiper-navigation-color": "red ",
					"--swiper-pagination-color": "red ",
				}}
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
				spaceBetween={30}
				slidesPerView={4}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[FreeMode, Navigation, Thumbs]}
				className="mySwiper"
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
			<ToggleBtn/>
		</>
	);
};

export default MySwiper;
