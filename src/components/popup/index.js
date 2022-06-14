import React, { useEffect, useState } from "react";
import { GiBookmarklet } from "react-icons/gi";
import { GiGuitar } from "react-icons/gi";
import { GiCoffeeCup } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { setMood } from "~/redux-toolkit/global/globalSlice";
const PopupMenu = () => {
  const { mood } = useSelector((state) => state.global);
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  console.log("trang thai:", mood);
  const [currentMood, setCurrentMood] = useState("chill");
  useEffect(() => {
    dispatch(setMood(currentMood));
  }, [currentMood, dispatch]);
  return (
    <div className="absolute z-20 flex items-center justify-end w-full h-full ">
      <div className="justify-around gap-y-4 max-w-full relative px-3 py-6 w-[60px] mr-5 flex flex-col bg-popUp items-center rounded-[35px]">
        <div className="rounded-tr-[35px] relative rounded-tl-[35px] cursor-pointer">
          <i className="text-4xl font-semibold cursor-pointer text-textMenu bi bi-sliders"></i>
          <div className="absolute flex flex-col py-4 px-7 right-full top-[-50%]  rounded-3xl mt-5 overflow-hidden w-[345px]  z-50 bg-[#070707]">
            <h4 className="mb-5 text-base font-semibold text-white ">Mood</h4>
            <div className="grid grid-cols-3 gap-x-7">
              <div
                onClick={() => setCurrentMood("sleep")}
                id="sleep"
                className="bg-[#14141d] rounded-xl p-3 h-[84px] w-[84px] items-center flex flex-col justify-between cursor-pointer"
              >
                <i className="text-3xl bi text-menuIcon bi-moon-fill"></i>
                <span className="text-lg font-normal text-menuIcon">Sleep</span>
              </div>
              <div
                onClick={() => setCurrentMood("rap")}
                id="rap"
                className="bg-[#14141d] rounded-xl p-3 h-[84px] w-[84px] items-center flex flex-col justify-between cursor-pointer"
              >
                <GiGuitar className="text-3xl bi text-menuIcon" />
                <span className="text-lg font-normal text-menuIcon">Rap</span>
              </div>
              <div
                onClick={() => setCurrentMood("chill")}
                id="chill"
                className={`bg-[#14141d] rounded-xl p-3 h-[84px] w-[84px] items-center flex flex-col justify-between cursor-pointer ${
                  active ? "bg-primary" : ""
                }`}
              >
                <GiCoffeeCup className="text-3xl bi text-menuIcon" />
                <span className="text-lg font-normal text-menuIcon">Chill</span>
              </div>
            </div>
          </div>
        </div>
        <div className="line w-full h-[3px] bg-textMenu"></div>
        <div className="text-4xl cursor-pointer text-textMenu">
          <GiBookmarklet />
        </div>
      </div>
    </div>
  );
};

export default PopupMenu;
