import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

let useStore = (set) => {
    return {
        tickets:[],
        setTicket: (ticket) => set((state) => ({tickets:[...state.tickets,ticket]})),
        count: 0,
        language:localStorage.getItem("language") || "uz",
        setLanguage: (lang) => set(() => ({language: lang})),
        increaseCount: () => set((state) => ({ count: state.count + 1 })),
        addNumber: (number) => set((state) => ({ count: state.count + number })),
    };
};

useStore  = persist(useStore,{name:"settings"})
useStore = devtools(useStore)

export default create(useStore);
