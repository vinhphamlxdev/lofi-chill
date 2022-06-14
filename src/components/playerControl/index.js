import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";

// import chill from "~/assets/songs/chill1.mp3";
import { chill, rap, sleep } from "~/songData";
import Control from "./Control";
const Player = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const { mood } = useSelector((state) => state.global);

  return (
    <Fragment>
      <div className="absolute h-[100px] bottom-0 left-0 right-0 z-50 flex items-center justify-center w-full p-8 required:">
        {mood === "chill" && (
          <>
            <div className="absolute font-normal text-white left-20">
              Song name: {chill[currentSongIndex].name}
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
            <div className="absolute font-normal text-white left-20">
              Song name: {rap[currentSongIndex].name}
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
            <div className="absolute font-normal text-white left-20">
              Song name: {sleep[currentSongIndex].name}
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
