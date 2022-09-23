import React, { Fragment, useEffect, useRef, useState } from "react";
import prevBtn from "~/assets/prev.svg";
import playBtn from "~/assets/play.svg";
import nextBtn from "~/assets/next.svg";
import pauseBtn from "~/assets/pause.svg";
import { useDispatch, useSelector } from "react-redux";
import { setPlaying } from "~/redux-toolkit/global/globalSlice";

const Control = ({
  songs,
  currentSongIndex,
  setCurrentSongIndex,
  nextSongIndex,
}) => {
  const audioElem = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const dispatch = useDispatch();
  const { playing, valueVolume, isLoop } = useSelector((state) => state.global);
  useEffect(() => {
    dispatch(setPlaying(isPlaying));
  }, [dispatch, isPlaying, playing]);
  const nextSong = (forwards = true) => {
    if (forwards) {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp++;
        if (temp > songs.length - 1) {
          temp = 0;
        }
        return temp;
      });
    } else {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp--;
        if (temp < 0) {
          temp = songs.length - 1;
        }
        return temp;
      });
    }
    dispatch(setPlaying(isPlaying));
    setIsPlaying(true);
  };
  useEffect(() => {
    if (isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
    audioElem.current.volume = valueVolume / 100;
  }, [isPlaying, valueVolume]);
  return (
    <Fragment>
      <div className="flex items-center ">
        <div
          onClick={() => nextSong(false)}
          className="relative cursor-pointer hover:opacity-50 prev-btn w-9 h-9"
        >
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
        <div
          onClick={() => nextSong()}
          className="relative cursor-pointer hover:opacity-50 next w-9 h-9"
        >
          <img className="object-cover w-full" src={nextBtn} alt="" />
        </div>
        <audio
          loop={isLoop}
          autoPlay
          onEnded={() => nextSong(true)}
          src={songs[currentSongIndex].src}
          ref={audioElem}
        ></audio>
      </div>
    </Fragment>
  );
};

export default Control;
