import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
	const navigate=useNavigate("")
	return (
		<>
		  <button onClick={()=>navigate("/login")} className="ml-16 px-4 py-5 bg-swiper_bg rounded-xl "><MdOutlineArrowBackIosNew color="red" />
</button>
			<div className="mx-auto text-center">
				<h1 className="font-medium  text-[32px] pt-12 mb-4">Введите СМС-код</h1>
				<p className="max-w-[330px] mx-auto text-center text-[#777]   mb-[40px]">
					Введите СМС-код, который мы отправили на номер{" "}
					<span className="text-main_color">+998 88 800 90 00</span>
				</p>

				<p className="max-w-[330px] mx-auto text-center text-[#777]  mb-[40px]">
					Отправить код еще раз – <span className="text-main_color">0:52 </span>
				</p>
			</div>
		</>
	);
};

export default AuthPage;
