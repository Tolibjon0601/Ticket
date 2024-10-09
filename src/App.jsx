import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/main_layouts/layout";
import HomePage from "./pages/home/homePage";
import LoginPage from "./assets/login/login";
import AuthPage from "./assets/login/authPage";
import SeansPage from "./pages/home/seansPage";
import Searchpage from "./pages/home/searchpage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import SinglePage from "./pages/seance/singlepage";
import CinemaPage from "./pages/cinema/cinemapage";
import Ticketpage from "./pages/cinema/ticketpage";
import { Provider } from "react-redux";
import PaymentPage from "./pages/home/payment";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContextProvider from "./assets/context/authcontext/authContext";
import store from "./assets/redux/store";

const queryClient = new QueryClient();

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <MainLayout />,
			children: [
				{
					index: true,
					element: <HomePage />,
				},
				{
					path: "login",
					element: <LoginPage />,
				},
				{
					path: "authpage",
					element: <AuthPage />,
				},
				{
					path: "seanspage",
					element: <SeansPage />,
				},
				{
					path: "ticketpage",
					element: <Ticketpage />,
				},
				{
					path: "searchpage",
					element: <Searchpage />,
				},
				{
					path: "cinemapage",
					element: <CinemaPage />,
				},
				{
					path: "/movie/:id",
					element: <SinglePage />,
				},

				{
					path: "/ticketpage",
					element: <PaymentPage />,
				},
			],
		},
	]);

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
