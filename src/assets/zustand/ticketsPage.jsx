import React from 'react';
import useStore from "../zustand/store"; // to'g'ri yo'l


const TicketsPage = () => {
    const tickets = useStore((state) => state.tickets);

    return (
        <div>
            <h2>Biletlar ro'yxati:</h2>
            <ul>
                {tickets.length > 0 ? (
                    tickets.map((ticket, index) => (
                        <li key={index}>
                            <h3>{ticket.title}</h3>
                            <img src={ticket.image} alt={ticket.title} />
                            <p>{ticket.description}</p>
                        </li>
                    ))
                ) : (
                    <p>Biletlar yo'q.</p>
                )}
            </ul>
        </div>
    );
};

export default TicketsPage;
