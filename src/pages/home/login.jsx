import { Link, useNavigation } from "react-router-dom";
import InputMask from "react-input-mask";

const LoginPage = () => {



  return (

    <div className="text-center">
      <h1 className="font-medium text-[32px] pt-12 mb-4">Регистрация</h1>
      <p className="text-[#777] max-w-[300px] mx-auto mb-8">
        Введите номер телефона для того чтобы войти или пройти регистрацию
      </p>

      <form className="flex flex-col items-center">
        <InputMask mask="+999-99-999-99-99" placeholder="+998 88 800-90-00">
          {(inputProps) => (
            <input
              className="py-[22px] pr-[171px] pl-[52px] auth_input text-xl font-medium bg-[#363434] border-none rounded-xl mb-6"
              {...inputProps}
            />
          )}
        </InputMask>

        <Link to="/authPage">
          <button  className="py-4 px-[176px] bg-main_color rounded-xl text-xl mb-6 font-medium">
            Регистрация
          </button>
        </Link>
      </form>

      <p className="text-[#777] font-normal text-lg mb-6">или</p>
      <div className="flex justify-center gap-2">
        <button className="facebook_btn bg-[#363434] rounded-xl py-[22px] px-[40px] flex items-center gap-[9px] text-[16px] font-medium">
          Facebook
        </button>
        <button
          className="google_btn bg-[#363434] rounded-xl py-[22px] flex items-center gap-[9px] text-[16px] font-medium px-[50px]"
          href=""
        >
          Google
        </button>
      </div>
      <p className="max-w-[340px] mx-auto text-[#777] flex-shrink mt-36 mb-[40px]">
        Нажимая на кнопку "Регистрация" Вы соглашаетесь с{" "}
        <span className="text-main_color">“Универсальным договором”</span>
      </p>
    </div>
  );
};

export default LoginPage;
