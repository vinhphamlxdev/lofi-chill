import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import iconPlaying from "~/assets/iconPlaying.gif";
import { chill, rap, sleep } from "~/songData";
import Control from "./Control";
const Player = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const { mood, Playing } = useSelector((state) => state.global);
  return (
    <Fragment>
      <div className="absolute sx:px-3 lg:px-6 h-[100px] bottom-0 left-0 right-0 z-20 flex items-center justify-center w-full p-8 required:">
        {mood === "chill" && (
          <>
            <div className="absolute flex h-5 font-normal text-white lg:left-7 left-20 sx:hidden">
              <span className="h-full  song-name  mt-auto capitalize text-inherit w-[150px] overflow-hidden ">
                <p> {chill[currentSongIndex].name}</p>
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
            <div className="absolute flex h-5 font-normal text-white lg:left-7 left-20 sx:hidden">
              <span className="h-full song-name  mt-auto capitalize text-inherit w-[150px] overflow-hidden ">
                <p> {rap[currentSongIndex]?.name}</p>
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
            <div className="absolute flex h-5 font-normal text-white lg:left-7 left-20 sx:hidden">
              <span className="h-full w-[150px] song-name overflow-hidden text-inherit ">
                <p> {sleep[currentSongIndex].name}</p>
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
