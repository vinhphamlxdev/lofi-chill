import React, { Fragment, useEffect, useRef, useState } from "react";
import prevBtn from "~/assets/prev.svg";
import playBtn from "~/assets/play.svg";
import nextBtn from "~/assets/next.svg";
import pauseBtn from "~/assets/pause.svg";
import chill from "~/assets/songs/chill1.mp3";
const Player = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  });
  return (
    <Fragment>
      <div className="absolute h-[100px] bottom-0 left-0 right-0 z-50 flex items-center justify-center w-full p-8 required:">
        <div className="absolute font-normal text-white left-20">
          Song name: chill lofi
        </div>
        <div className="flex items-center ">
          <div className="relative cursor-pointer hover:opacity-50 prev-btn w-9 h-9">
            <img className="object-cover w-full" src={prevBtn} alt="" />
          </div>
          <div
            onClick={() => setIsPlaying(!isPlaying)}
            className="relative w-12 h-12 mx-4 cursor-pointer hover:opacity-50 boder play-btn"
          >
            {isPlaying ? (
              <img className="object-cover w-full" src={pauseBtn} alt="" />
            ) : (
              <img className="object-cover w-full" src={playBtn} alt="" />
            )}
          </div>
          <div className="relative cursor-pointer hover:opacity-50 next w-9 h-9">
            <img className="object-cover w-full" src={nextBtn} alt="" />
          </div>
        </div>
      </div>
      <audio ref={audioRef} loop src={chill}></audio>
    </Fragment>
  );
};

export default Player;
