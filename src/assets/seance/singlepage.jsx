import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import ToggleBtn from "../../pages/home/toggleBtn";
// import { IoIosArrowBack } from 'react-icons/io';

const SinglePage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { data, loading, error } = useFetchData(
		`https://66ceca18901aab24841f8da1.mockapi.io/api/ecomerce/${id}`
	);

	if (loading) {
		return <div>...Loading...</div>;
	}

	return (
		<div className="flex flex-col w-full h-[640px] items-center mx-auto">
			<img src={data.image} alt="" />
			<h1 className="text-4xl mb-6">{data.title}</h1>
			<p className="text-xl ">{data.description}</p>
			<button className="py-4 px-8 bg-swiper_bg rounded-xl">Button</button>
		</div>
	);
};
<ToggleBtn />;
export default SinglePage;
