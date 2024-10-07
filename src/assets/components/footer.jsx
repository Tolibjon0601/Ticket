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
          <h2 className="font-medium text-lg text-white">О нас</h2>
        </li>
        <li className="flex gap-2 font-medium text-lg">
          <img src="./image/note_icon.svg" alt="" />
          <p className="text-textcolor">Публичная оферта</p>
        </li>
        <li className="flex gap-2 font-medium text-lg text-main_color underline">
          <img src="./image/advertising_icon.svg" alt="" />
          <p >Реклама</p>
        </li>
        <li className="flex gap-2 font-medium text-lg">
          <img src="./image/faq_icon.svg" alt="" />
          <p className="text-textcolor">F.A.Q</p>
        </li>
        <li className="flex gap-2 font-medium text-lg">
          <img src="./image/phone_icon.svg" alt="" />
          <p className="text-textcolor">Контакты</p>
        </li>
      </ul>
      <ul className="gap-4 flex flex-col"  >
        <li>
          <h2 className="font-medium text-lg text-white">Категории</h2>
        </li>
        <li className="flex gap-2 font-medium text-lg">
          <img src="./image/cinema_icon.svg" alt="" />
          <p className="text-textcolor">Кино </p>
        </li>
        <li className="flex gap-2 font-medium text-lg">
          <img src="./image/teatr_icon.svg" alt="" />
          <p className="text-textcolor">Театр</p>
        </li>
        <li className="flex gap-2 font-medium text-lg">
          <img src="./image/konsert_icon.svg" alt="" />
          <p className="text-textcolor">Концерты</p>
        </li>
        <li className="flex gap-2 font-medium text-lg">
          <img src="./image/sport_icon.svg" alt="" />
          <p className="text-textcolor">Спорт</p>
        </li>
      </ul>
      <ul>
      <li>
          <h2 className="font-medium text-lg text-white">Связаться с нами</h2>
        </li>
        <li className="flex gap-2 font-medium text-lg text-main_color mt-[20px]"><a  href="#">+998 (95) 897-33-38</a></li>
        <li className="font-medium text-lg mt-[54px]"><p>Социальные сети</p></li>
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
