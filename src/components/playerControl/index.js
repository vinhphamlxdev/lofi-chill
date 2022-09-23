import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import iconPlaying from "~/assets/iconPlaying.gif";
import { setRepeat } from "~/redux-toolkit/global/globalSlice";
import { chill, rap, sleep } from "~/songData";
import Control from "./Control";
const Player = () => {
  const dispatch = useDispatch();
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const { mood, Playing } = useSelector((state) => state.global);
  useEffect(() => {
    if (mood === "sleep") {
      dispatch(setRepeat(true));
    } else {
      dispatch(setRepeat(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mood]);
  return (
    <Fragment>
      <div className="absolute sx:px-3 lg:px-6 h-[100px] bottom-0 left-0 right-0 z-20 flex items-center justify-center w-full p-8 required:">
        {mood === "chill" && (
          <>
            <div className="absolute flex font-normal text-white lg:left-7 left-20 sx:hidden">
              <span className="h-full  song-name  capitalize text-inherit w-[150px] overflow-hidden">
                <p className="whitespace-nowrap">
                  {chill[currentSongIndex].name}
                </p>
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
            <div className="absolute flex font-normal text-white lg:left-7 left-20 sx:hidden">
              <span className="h-full  song-name  capitalize text-inherit w-[150px] overflow-hidden">
                <p className="whitespace-nowrap">
                  {" "}
                  {rap[currentSongIndex]?.name}
                </p>
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
            <div className="absolute flex font-normal text-white lg:left-7 left-20 sx:hidden">
              <span className="h-full  song-name  capitalize text-inherit w-[150px] overflow-hidden">
                <p className="whitespace-nowrap">
                  {" "}
                  {sleep[currentSongIndex].name}
                </p>
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
