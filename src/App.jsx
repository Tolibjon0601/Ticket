import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import MainLayout from "./layouts/main_layouts/layout";
import HomePage from "./pages/home/homePage";
import LoginPage from "./assets/login/login";
import AuthPage from "./assets/login/authPage";
import SeansPage from "./pages/home/seansPage";
import SearchPage from "./pages/home/searchpage";
import SinglePage from "./pages/seance/singlepage";
import CinemaPage from "./pages/cinema/cinemapage";
import TicketPage from "./pages/cinema/ticketpage";
import PaymentPage from "./pages/home/payment";

import AuthContextProvider from "./assets/context/authcontext/authContext";
import store from "./assets/redux/store";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const queryClient = new QueryClient();

const routes = [
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "login", element: <LoginPage /> },
			{ path: "authpage", element: <AuthPage /> },
			{ path: "seanspage", element: <SeansPage /> },
			{ path: "ticketpage", element: <TicketPage /> },
			{ path: "searchpage", element: <SearchPage /> },
			{ path: "cinemapage", element: <CinemaPage /> },
			{ path: "movie/:id", element: <SinglePage /> },
			{ path: "payment", element: <PaymentPage /> },
		],
	},
];

function App() {
	const router = createBrowserRouter(routes);

	return (
		<Provider store={store}>
			<AuthContextProvider>
				<QueryClientProvider client={queryClient}>
					<ToastContainer />
					<RouterProvider router={router} />
				</QueryClientProvider>
			</AuthContextProvider>
		</Provider>
	);
}

export default App;
