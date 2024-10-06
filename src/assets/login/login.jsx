import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import parsePhoneNumberFromString from "libphonenumber-js";
import "flag-icons/css/flag-icons.min.css";

const LoginPage = () => {
	const [phone, setPhone] = useState("");
	const [country, setCountry] = useState("");
	const navigate = useNavigate();

	const handlePhone = (evt) => {
		const inputPhoneNumber = evt.target.value;
		setPhone(inputPhoneNumber);
		const parsedPhoneNumber = parsePhoneNumberFromString(inputPhoneNumber);
		if (parsedPhoneNumber) {
			setCountry(parsedPhoneNumber.country.toLowerCase());
		} else {
			setCountry("");
		}
	};
	return (
		<div className="pt-12">
			<button onClick={() => navigate("/")} className="ml-16 px-4 py-5 bg-swiper_bg rounded-xl">
				<MdOutlineArrowBackIosNew color="red" />
			</button>
			<div className="text-center">
				<h1 className="font-medium text-[32px] mb-4">Регистрация</h1>
				<p className="text-[#777] max-w-[300px] mx-auto mb-8">
					Введите номер телефона для того чтобы войти или пройти регистрацию
				</p>
				<form className="flex flex-col items-center">
					<div className="relative mb-6">
						{country && (
							<span
								className={`fi fi-${country} absolute left-3 top-1/2 transform -translate-y-1/2 w-7 h-6 rounded-[50%]`}
								style={{
									objectFit: "contain",
								}}
							></span>
						)}
						<InputMask
							mask="+999-99-999-99-99"
							placeholder="+998 88 800-90-00"
							value={phone}
							onChange={handlePhone}
						>
							{(inputProps) => (
								<input
									className="py-[22px] pl-[52px] pr-[50px] auth_input text-xl font-medium bg-[#363434] border-none rounded-xl"
									{...inputProps}
								/>
							)}
						</InputMask>
					</div>
					<Link to="/authPage">
						<button className="py-4 px-[176px] bg-main_color rounded-xl text-xl mb-6 font-medium">
							Регистрация
						</button>
					</Link>
				</form>
				<p className="text-[#777] font-normal text-lg mb-6">или</p>
				<div className="flex justify-center gap-2">
					<button className="facebook_btn bg-[#363434] rounded-xl py-[22px] px-[40px] flex items-center gap-[9px] text-[16px] font-medium">
						Facebook
					</button>
					<button className="google_btn bg-[#363434] rounded-xl py-[22px] flex items-center gap-[9px] text-[16px] font-medium px-[50px]">
						Google
					</button>
				</div>
				<p className="max-w-[340px] mx-auto text-[#777] flex-shrink mt-36 mb-[40px]">
					Нажимая на кнопку "Регистрация" Вы соглашаетесь с{" "}
					<span className="text-main_color">“Универсальным договором”</span>
				</p>
			</div>
		</div>
	);
};
export default LoginPage;
