import React from "react";
import { GiBookmarklet } from "react-icons/gi";
const PopupMenu = () => {
  return (
    <div className="absolute flex items-center justify-end w-full h-full ">
      <div className="justify-around gap-y-4 max-w-full relative px-3 py-6 w-[60px] mr-5 flex flex-col bg-popUp items-center rounded-[35px]">
        <div className="rounded-tr-[35px] rounded-tl-[35px] cursor-pointer">
          <i className="text-4xl font-semibold cursor-pointer text-textMenu bi bi-sliders"></i>
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
