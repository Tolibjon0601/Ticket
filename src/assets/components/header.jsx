	import { Link, useLocation } from "react-router-dom";
	import HeaderSeans from "../../icons/headerSeans";
	import PosterImg from "../../icons/headerAfisha";
	import HeaderTicket from "../../icons/header_ticket";
	import HeaderSearch from "../../icons/header_search";
	import { AuthContext } from "../context/authcontext/authContext";
	import { useContext } from "react";
	import { useSelector, useDispatch } from "react-redux";
	import { toast } from "react-toastify";

	const Header = () => {
					const { isLogin, logout } = useContext(AuthContext);
					const { language } = useSelector((state) => state.language);
					const dispatch = useDispatch(); // Access the dispatch function

					const location = useLocation();
					const currentPath = location.pathname;

					const changeLanguage = (evt) => {
									const selectedLanguage = evt.target.value;
									dispatch({ type: selectedLanguage }); // Dispatch an action with the language type
									toast.success(`Language changed to ${selectedLanguage}`);
					};

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
																	<select name="lang" value={language} onChange={changeLanguage} className="py-2 px-4 text-lg rounded-xl text-black">
																					<option value="SET_LANGUAGE_UZ">Uz</option>
																					<option value="SET_LANGUAGE_RU">Ru</option>
																					<option value="SET_LANGUAGE_EN">En</option>
																	</select>
																	{isLogin ? (
																					<button onClick={logout} className="">
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
