import { Link, useLocation } from "react-router-dom";
import HeaderSeans from "../../icons/headerSeans";
import PosterImg from "../../icons/headerAfisha";
import HeaderTicket from "../../icons/header_ticket";
import HeaderSearch from "../../icons/header_search";

const Header = () => {
	const location = useLocation();
	const currentPath = location.pathname;

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
				<select name="lang" className="py-2 px-4 text-lg rounded-xl text-black">
					<option value="ru">Ру</option>
					<option value="uz">Uz</option>
				</select>
				<Link to="/login">
					<button className="py-[22px] px-[66px] bg-main_color rounded-xl font-medium text-lg text-white">
						Войти
					</button>
				</Link>
			</div>
		</header>
	);
};

export default Header;
