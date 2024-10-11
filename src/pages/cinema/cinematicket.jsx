import React from 'react';
import useStore from '../../zustand';

const CinemaTicket = () => {
  const tickets = useStore((state) => state.tickets);
  return (
    <div className="flex flex-col mx-auto gap-12">
      {tickets.map((ticket) => (
        <div key={ticket.id} className="bg-[#1D1D1D] p-4 rounded-lg">
          <h2 className="text-2xl">{ticket.title}</h2>
          <img src={ticket.image} alt={ticket.title} className="w-full h-48 rounded-lg" />
          <p>{ticket.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CinemaTicket;
