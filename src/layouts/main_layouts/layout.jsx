import React from "react";
import Header from "../../assets/components/header";
import Footer from "../../assets/components/footer";
import { Outlet, useLocation } from "react-router-dom";
import MainSwiper from "../../pages/home/swiper";

const MainLayout = () => {
	const location = useLocation();

	return (
		<div className="container max-w-[1360px] mx-auto text-white flex flex-col min-h-screen">
			<Header />
			<div className="flex-grow">
				<Outlet />
			</div>

			{location.pathname !== "/login" && location.pathname !== "/authPage" && <MainSwiper />}
			{location.pathname !== "/login" && location.pathname !== "/authPage" && <Footer />}
		
		</div>
	);
};

export default MainLayout;
