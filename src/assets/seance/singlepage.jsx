import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData"; // Ma'lumotlarni olish uchun xususiy hook
import useStore from "../zustand/store"; // Store importi

const SinglePage = () => {
  const { id } = useParams(); // URL dan id olish
  const navigate = useNavigate(); // Navigatsiya qilish uchun
  const { data, loading } = useFetchData(
    `https://66ceca18901aab24841f8da1.mockapi.io/api/ecomerce/${id}`
  );

  const addTicket = useStore((state) => state.addTicket); // Store dan bilet qo'shish funksiyasini olish

  if (loading) {
    return <div>...Loading...</div>;
  }

  const handleAddTicket = () => {
    addTicket(data); // Ma'lumotlar asosida biletni qo'shish
    navigate('/ticketpage'); // TicketPage ga o'tish
  };

  return (
    <div className="flex flex-col w-full h-[640px] items-center mx-auto">
      <img src={data.image} alt={data.title} />
      <h1 className="text-4xl mb-6">{data.title}</h1>
      <p className="text-xl">{data.description}</p>
      <button onClick={handleAddTicket} className="py-4 px-8 bg-swiper_bg rounded-xl">
        Bilet qo'shish
      </button>
    </div>
  );
};

export default SinglePage;
