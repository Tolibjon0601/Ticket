import { Link, useLocation } from "react-router-dom";
import HeaderSeans from "../../icons/headerSeans";
import PosterImg from "../../icons/headerAfisha";
import HeaderTicket from "../../icons/header_ticket";
import HeaderSearch from "../../icons/header_search";
import { AuthContext } from "../context/authcontext/authContext";
import { useContext } from "react";
import { useDispatch } from "react-redux";
// import { useStore } from "zustand";


const Header = () => {
	const { isLogin, logout } = useContext(AuthContext);
	const dispatch = useDispatch();
	// const { language, setLanguage } = useStore();

	const location = useLocation();
	const currentPath = location.pathname;

	// const changeLanguage = (evt) => {
	// 	setLanguage(evt.target.value);
	// };

	return (
		<header className="py-[22px] flex items-center justify-between">
			<div className="ml-20">
				<Link to="/">
					<img src="/image/header_logo.svg" alt="Company Logo" />
				</Link>
			</div>

			<ul className="flex space-x-4">
				<li>
					<Link to="/">
						<PosterImg color={currentPath === "/" ? "#c61f1f" : "#a1a1a1"} />
					</Link>
				</li>
				<li>
					<Link to="/seanspage">
						<HeaderSeans
							color={
								currentPath === "/seanspage" || currentPath.includes("movie")
									? "#c61f1f"
									: "#a1a1a1"
							}
						/>
					</Link>
				</li>
				<li>
					<Link to="/ticketpage">
						<HeaderTicket color={currentPath === "/ticketpage" ? "#c61f1f" : "#a1a1a1"} />
					</Link>
				</li>
				<li>
					<Link to="/searchpage">
						<HeaderSearch color={currentPath === "/searchpage" ? "#c61f1f" : "#a1a1a1"} />
					</Link>
				</li>
			</ul>
			<div className="flex items-center gap-5">
				<select
					name="lang"
					// value={language}
					// onChange={changeLanguage}
					className="py-2 px-4 text-lg rounded-xl bg-swiper_bg"
				>
					<option value="UZ">Uz</option>
					<option value="RU">Ru</option>
					<option value="EN">En</option>
				</select>
				{isLogin ? (
					<button onClick={logout}>
						<img src="./image/profile-icon.svg" alt="" />
					</button>
				) : (
					<Link to="/login">
						<button className="py-[22px] px-[66px] bg-main_color rounded-xl font-medium text-lg text-white">
							Войти
						</button>
					</Link>
				)}
			</div>
		</header>
	);
};

export default Header;
