import React from "react";
import prevBtn from "~/assets/prev.svg";
import playBtn from "~/assets/play.svg";
import nextBtn from "~/assets/next.svg";
const Player = () => {
  return (
    <div className="absolute h-[100px] bottom-0 left-0 right-0 z-50 flex items-center justify-center w-full p-8 required:">
      <div className="absolute font-normal text-white left-20">
        Song name: chill lofi
      </div>
      <div className="flex items-center ">
        <div className="relative cursor-pointer hover:opacity-50 prev-btn w-9 h-9">
          <img className="object-cover w-full" src={prevBtn} alt="" />
        </div>
        <div className="relative w-12 h-12 mx-4 cursor-pointer hover:opacity-50 boder play-btn">
          <img className="object-cover w-full" src={playBtn} alt="" />
        </div>
        <div className="relative cursor-pointer hover:opacity-50 next w-9 h-9">
          <img className="object-cover w-full" src={nextBtn} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Player;
