import { useState } from "react";
import PaymentPage from "../home/payment";
import { IoClose } from "react-icons/io5";

const CinemaTicket = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div className="flex flex-col mx-auto gap-12 ">
			<div className="flex p-[6px] items-center gap-5 bg-[#1D1D1D] relative rounded-t-[12px] mt-12 min-w-[570px]">
				<div>
					<img src="./image/ticket_img1.png" alt="" />
				</div>
				<div>
					<h2 className="text-2xl mb-5">Кунг Фу Панда 4</h2>
					<ul className="flex gap-[6px] mb-4">
						<li>
							<p className="text-medium text-[14px] text-textcolor">2024</p>
						</li>
						<li>
							<p className="text-medium text-[14px] text-textcolor">•</p>
						</li>
						<li>
							<p className="text-medium text-[14px] text-textcolor">RU</p>
						</li>
						<li>
							<p className="text-medium text-[14px] text-textcolor">•</p>
						</li>
						<li>
							<p className="text-medium text-[14px] text-textcolor">6+</p>
						</li>
						<li>
							<p className="text-medium text-[14px] text-textcolor">•</p>
						</li>
						<li>
							<p className="text-medium text-[14px] text-textcolor">1ч 34м / 94 минут</p>
						</li>
					</ul>
					<p className="text-medium text-[14px] mb-4">Magic Cinema</p>
					<p className="text-medium text-[14px] mb-4">Зал №1</p>
					<p className="text-medium text-[14px] mb-4">28 марта, 19:30</p>
					<button className="flex items-center gap-[6px] text-medium py-3 px-4 rounded-lg bg-button_color">
						<img src="./image/check_icon.svg" alt="" />
						Оплачено
					</button>
				</div>
				<div className="flex justify-between items-center bg-[#1D1D1D] w-full py-2 px-4 rounded-b-[12px] absolute left-0 bottom-[-70px]">
					<p className="text-[14px] font-medium text-white">Ваш билет готов</p>
					<button className="py-4 px-[78px] bg-main_color rounded-xl">Получить билет</button>
				</div>
			</div>

			<div className="flex p-[6px] items-center gap-5 bg-[#1D1D1D] relative rounded-t-[12px] mt-12 min-w-[570px]">
				<div>
					<img src="./image/ticket_img2.png" alt="" />
				</div>
				<div>
					<h2 className="text-2xl mb-5">Кунг Фу Панда 4</h2>
					<ul className="flex gap-[6px] mb-4">
						{/* Same movie info */}
						<li>
							<p className="text-medium text-[14px] text-textcolor">2024</p>
						</li>
						<li>
							<p className="text-medium text-[14px] text-textcolor">•</p>
						</li>
						<li>
							<p className="text-medium text-[14px] text-textcolor">RU</p>
						</li>
						<li>
							<p className="text-medium text-[14px] text-textcolor">•</p>
						</li>
						<li>
							<p className="text-medium text-[14px] text-textcolor">6+</p>
						</li>
						<li>
							<p className="text-medium text-[14px] text-textcolor">•</p>
						</li>
						<li>
							<p className="text-medium text-[14px] text-textcolor">1ч 34м / 94 минут</p>
						</li>
					</ul>
					<p className="text-medium text-[14px] mb-4">Magic Cinema</p>
					<p className="text-medium text-[14px] mb-4">Зал №1</p>
					<p className="text-medium text-[14px] mb-4">30 марта, 11:00</p>
					<button className="flex items-center gap-[6px] text-medium py-3 px-4 rounded-lg bg-button_color">
						<img src="./image/watch_icon.svg" alt="" />
						Ждет оплаты
					</button>
				</div>
				<div className="flex justify-between items-center bg-[#1D1D1D] w-full py-2 px-4 rounded-b-[12px] absolute left-0 bottom-[-70px]">
					<p className="text-[14px] font-medium text-white">Бронирован (135 000 сум)</p>
					<button className="py-4 px-[78px] bg-main_color rounded-xl">Оплатить</button>
				</div>
			</div>

			<div className="flex p-[6px] items-center gap-5 bg-[#1D1D1D] relative rounded-t-[12px] mt-12 min-w-[570px]">
				<div>
					<img src="./image/ticket_img2.png" alt="" />
				</div>
				<div>
					<h2 className="text-2xl mb-5">Кунг Фу Панда 4</h2>
					<ul className="flex gap-[6px] mb-4">
						<li>
							<p className="text-medium text-[14px] text-textcolor">2024</p>
						</li>
						<li>
							<p className="text-medium text-[14px] text-textcolor">•</p>
						</li>
						<li>
							<p className="text-medium text-[14px] text-textcolor">RU</p>
						</li>
						<li>
							<p className="text-medium text-[14px] text-textcolor">•</p>
						</li>
						<li>
							<p className="text-medium text-[14px] text-textcolor">6+</p>
						</li>
						<li>
							<p className="text-medium text-[14px] text-textcolor">•</p>
						</li>
						<li>
							<p className="text-medium text-[14px] text-textcolor">1ч 34м / 94 минут</p>
						</li>
					</ul>
					<p className="text-medium text-[14px] mb-4">Magic Cinema</p>
					<p className="text-medium text-[14px] mb-4">30 марта, 11:00</p>
					<button className="flex items-center gap-[6px] text-medium py-3 px-4 rounded-lg bg-button_color">
						<img src="./image/watch_icon.svg" alt="" />
						Ждет оплаты
					</button>
				</div>
				<div className="flex justify-between items-center bg-[#1D1D1D] w-full py-2 px-4 rounded-b-[12px] absolute left-0 bottom-[-70px]">
					<p className="text-[14px] font-medium text-white">Ваш билет бронирован</p>
					<button onClick={openModal} className="py-4 px-[78px] bg-main_color rounded-xl ">
						Оплатить
					</button>
				</div>
				{isModalOpen && (
					<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
						<PaymentPage />
						<button
							onClick={closeModal}
							className="absolute top-4 right-12 ml-16 px-4 py-5 bg-swiper_bg rounded-xl  "
						>
							<IoClose color="red " />
						</button>
					</div>
				)}
			</div>

			{/* Ticket 4 */}
			<div className="flex p-[6px] items-center gap-5 bg-[#1D1D1D] relative rounded-xl mt-12 min-w-[570px]">
				<div>
					<img src="./image/ticket_img4.png" alt="" />
				</div>
				<div>
					<h2 className="text-2xl mb-5">Пила / Джокер новый....</h2>
					<ul className="flex gap-[6px] mb-4">
						<li>
							<p className="text-medium text-[14px] text-textcolor">2024</p>
						</li>
						<li>
							<p className="text-medium text-[14px] text-textcolor">•</p>
						</li>
						<li>
							<p className="text-medium text-[14px] text-textcolor">RU</p>
						</li>
						<li>
							<p className="text-medium text-[14px] text-textcolor">•</p>
						</li>
						<li>
							<p className="text-medium text-[14px] text-textcolor">18+</p>
						</li>
						<li>
							<p className="text-medium text-[14px] text-textcolor">•</p>
						</li>
						<li>
							<p className="text-medium text-[14px] text-textcolor">2ч 56м / 176 минут</p>
						</li>
					</ul>
					<p className="text-medium text-[14px] mb-4">Magic Cinema</p>
					<p className="text-medium text-[14px] mb-4">Зал №1</p>
					<p className="text-medium text-[14px] mb-4">-</p>
					<button className="flex items-center gap-[6px] text-medium py-3 px-4 rounded-lg bg-button_color">
						<img src="./image/save_icon.svg" alt="" />
						Хочу посмотреть
					</button>
				</div>
			</div>
		</div>
	);
};

export default CinemaTicket;
