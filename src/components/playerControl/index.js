import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import iconPlaying from "~/assets/iconPlaying.gif";
// import chill from "~/assets/songs/chill1.mp3";
import { chill, rap, sleep } from "~/songData";
import Control from "./Control";
const Player = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const { mood, Playing } = useSelector((state) => state.global);
  return (
    <Fragment>
      <div className="absolute h-[100px] bottom-0 left-0 right-0 z-50 flex items-center justify-center w-full p-8 required:">
        {mood === "chill" && (
          <>
            <div className="absolute flex h-5 font-normal text-white left-20">
              <span className="h-full mt-auto text-inherit ">
                Song name: {chill[currentSongIndex].name}
              </span>
              {Playing && (
                <div className="flex-shrink-0 w-5 h-full ml-2">
                  <img
                    className="object-cover w-full"
                    src={iconPlaying}
                    alt=""
                  />
                </div>
              )}
            </div>
            <Control
              songs={chill}
              currentSongIndex={currentSongIndex}
              setCurrentSongIndex={setCurrentSongIndex}
            />
          </>
        )}
        {mood === "rap" && (
          <>
            <div className="absolute flex h-5 font-normal text-white left-20">
              <span className="h-full mt-auto text-inherit ">
                Song name: {rap[currentSongIndex].name}
              </span>
              {Playing && (
                <div className="flex-shrink-0 w-5 h-full ml-2">
                  <img
                    className="object-cover w-full"
                    src={iconPlaying}
                    alt=""
                  />
                </div>
              )}
            </div>
            <Control
              songs={rap}
              currentSongIndex={currentSongIndex}
              setCurrentSongIndex={setCurrentSongIndex}
            />
          </>
        )}
        {mood === "sleep" && (
          <>
            <div className="absolute flex h-5 font-normal text-white left-20">
              <span className="h-full text-inherit ">
                Song name: {sleep[currentSongIndex].name}
              </span>
              {Playing && (
                <div className="flex-shrink-0 w-5 h-full ml-2">
                  <img
                    className="object-cover w-full"
                    src={iconPlaying}
                    alt=""
                  />
                </div>
              )}
            </div>
            <Control
              songs={sleep}
              currentSongIndex={currentSongIndex}
              setCurrentSongIndex={setCurrentSongIndex}
            />
          </>
        )}
      </div>
    </Fragment>
  );
};

export default Player;
