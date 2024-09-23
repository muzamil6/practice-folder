import React from "react";
import Loction from "../../images/location.svg";
import { Colors } from "../constant/Colors";
import Track from "../../images/group.svg";
import Logo from "../../images/logo.svg";
import Cart from "../../images/shopping-cart.svg";
import Hook from "../../hooks/Practice";
import MuiStyle from "../../component/mui/muiStyle";

const Header = () => {
  return (
    <main className="">
      <div className="flex justify-between px-10 py-5  flex-wrap">
        <div>
          <span
            className={`font-Poppins font-extralight text-sm ${Colors.textColor}`}
          >
            Need a Help? (+92) 3497830890
          </span>
        </div>
        <div
          className={`flex gap-7 font-Poppins font-extralight text-sm ${Colors.textColor}`}
        >
          <p className="flex gap-4">
            <img src={Loction} className="w-6 h-6" alt="" />
            Our Store
          </p>
          <p className="flex gap-4">
            <img src={Track} className="w-6 h-6" alt="" />
            Track Your Order
          </p>
        </div>
      </div>
      {/*  */}
      <div className={` max-w-screen-2xl max-h-24 px-12 ${Colors.bgColor} `}>
        <div className="py-5 flex  justify-between ">
          <div className=" max-w-2xl max-h-14 flex gap-16">
            <img src={Logo} className="w-[140px] h-[39px]" alt="" />
            <div className="flex justify-center bg-white rounded-lg">
              <input
                type="text "
                className={`border-none ml-2 bg-transparent focus:outline-none rounded-lg w-full placeholder-${Colors.placeholderColor}`}
                placeholder="Serach any things"
              />
              <button
                className={`${Colors.btnBg} ${Colors.textbtn} py-1 px-6 rounded-2xl z-999 font-normal text-sm text-Poppins relative left-4`}
              >
                Search
              </button>
            </div>
          </div>
          <div
            className={`flex ${Colors.cartText} gap-3 font-normal justify-center p-[10px]`}
          >
            <img src={Cart} className="w-6 h-6" alt="" />
            <p className={`text-sm`}>Shopping Cart (0)</p>
          </div>
        </div>
      </div>

      {/* <Hook /> */}

      <MuiStyle />
    </main>
  );
};

export default Header;
