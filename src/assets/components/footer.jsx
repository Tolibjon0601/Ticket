import { useSelector } from "react-redux";

const Footer = () => {
  const { language } = useSelector((state) => state.language);
  return (
    <div className="flex justify-around pt-[120px]">
      <ul>
        <li className="mb-[48px]">
          <img src="./image/footer_logo.svg" alt="" />
        </li>
        <li className="mb-2">
          <img src="/image/google_icon.svg" alt="" />
        </li>
        <li>
          <img src="/image/appStore_icon.svg" alt="" />
        </li>
      </ul>
      <ul className="gap-4 flex flex-col"  >
        <li>
          <h2 className="font-medium text-lg text-white hover:text-main_color">О нас</h2>
        </li>
        <li className="flex gap-2 font-medium text-lg">
          <img src="./image/note_icon.svg" alt="" />
          <p className="text-textcolor hover:text-main_color">Публичная оферта</p>
        </li>
        <li className="flex gap-2 font-medium text-lg text-main_color underline">
          <img src="./image/advertising_icon.svg" alt="" />
          <p >Реклама</p>
        </li>
        <li className="flex gap-2 font-medium text-lg">
          <img src="./image/faq_icon.svg" alt="" />
          <p className="text-textcolor hover:text-main_color">F.A.Q</p>
        </li>
        <li className="flex gap-2 font-medium text-lg">
          <img src="./image/phone_icon.svg" alt="" />
          <p className="text-textcolor hover:text-main_color">Контакты</p>
        </li>
      </ul>
      <ul className="gap-4 flex flex-col"  >
        <li>
          <h2 className="font-medium text-lg text-white hover:text-main_color">Категории</h2>
        </li>
        <li className="flex gap-2 font-medium text-lg">
          <img src="./image/cinema_icon.svg" alt="" />
          <p className="text-textcolor hover:text-main_color">Кино </p>
        </li>
        <li className="flex gap-2 font-medium text-lg">
          <img src="./image/teatr_icon.svg" alt="" />
          <p className="text-textcolor hover:text-main_color">Театр</p>
        </li>
        <li className="flex gap-2 font-medium text-lg">
          <img src="./image/konsert_icon.svg" alt="" />
          <p className="text-textcolor hover:text-main_color">Концерты</p>
        </li>
        <li className="flex gap-2 font-medium text-lg">
          <img src="./image/sport_icon.svg" alt="" />
          <p className="text-textcolor hover:text-main_color">Спорт</p>
        </li>
      </ul>
      <ul>
      <li>
          <h2 className="font-medium text-lg text-white hover:text-main_color">Связаться с нами</h2>
        </li>
        <li className="flex gap-2 font-medium text-lg text-main_color mt-[20px]"><a  href="#">+998 (95) 897-33-38</a></li>
        <li className="font-medium text-lg mt-[54px] "><p className="hover:text-main_color">Социальные сети</p></li>
        <li className="flex gap-[20px] mt-[20px]">
          <img src="./image/instagram_icon.svg" alt="" />
          <img src="./image/facebook_icon.svg" alt="" />
          <img src="./image/youtube_icon.svg" alt="" />
        </li>
      </ul>

    </div>
  );
};

export default Footer;
