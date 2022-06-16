import React, { useEffect, useState } from "react";
import { GiBookmarklet } from "react-icons/gi";
import { GiGuitar } from "react-icons/gi";
import { GiCoffeeCup } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { setMood, setValueVolume } from "~/redux-toolkit/global/globalSlice";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import summerStorm from "~/assets/songs/summerStorm.mp3";
import firePlace from "~/assets/songs/firePlace.mp3";
import styled from "styled-components";
import ReactAudioPlayer from "react-audio-player";
import cityTraffic from "~/assets/songs/cityTraffic.mp3";
import cityRain from "~/assets/songs/rain.mp3";
import useClickOutSide from "~/hooks/useClickOutSide";
const StyledPopup = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 80px;
  z-index: 30;
  .player__progress-volume {
    position: relative;
    width: 100%;
    height: 10px;
    margin: 0 8px 0 4px;
  }

  .range-volume {
    color: #f3a952;
    height: 10px;
  }
  .MuiSlider-rail {
    color: #14141d;
  }
  .track-slider {
    margin-bottom: 0px;
  }
  .background-noise {
    overflow: hidden overlay;
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background-color: #14141d;
    }
  }
`;

const PopupMenu = () => {
  const { mood, valueVolume } = useSelector((state) => state.global);
  const { show, setShow, nodeRef, menuRef } = useClickOutSide();
  const dispatch = useDispatch();
  const [currentMood, setCurrentMood] = useState("chill");
  const [volumeStorm, setVolumeStorm] = useState(0);
  const [volumeFire, setVolumeFire] = useState(0);
  const [volumeTraffic, setVolumeTraffic] = useState(0);
  const handleChangeVolume = (e) => {
    dispatch(setValueVolume(e.target.value));
  };
  useEffect(() => {
    dispatch(setMood(currentMood));
  }, [currentMood, dispatch]);
  return (
    <StyledPopup className="absolute z-10 flex items-center justify-end w-full h-full ">
      <div className="justify-around gap-y-4 max-w-full relative px-3 py-6 w-[60px] mr-5 flex flex-col bg-popUp items-center rounded-[35px]">
        <div className="rounded-tr-[35px] relative rounded-tl-[35px] cursor-pointer">
          <i
            ref={menuRef}
            onClick={() => setShow(!show)}
            className="text-4xl font-semibold cursor-pointer text-textMenu bi bi-sliders"
          ></i>
          {show && (
            <div
              ref={nodeRef}
              className="absolute select-none flex flex-col py-4 px-7 right-full -top-[200%]  h-[450px]  rounded-3xl  overflow-hidden w-[345px]  z-50 bg-[#070707]"
            >
              <h4 className="mb-5 text-xl font-semibold text-white ">Mood</h4>
              <div className="grid grid-cols-3 gap-x-7">
                <div
                  onClick={() => setCurrentMood("sleep")}
                  id="sleep"
                  className={`bg-[#14141d] item-mood text-menuIcon  rounded-xl p-3 h-[84px] w-[84px] items-center flex flex-col justify-between cursor-pointer ${
                    mood === "sleep" ? "active" : ""
                  }`}
                >
                  <i className="text-3xl bi text-inherit bi-moon-fill"></i>
                  <span className="text-lg font-normal text-inherit">
                    Sleep
                  </span>
                </div>
                <div
                  onClick={() => setCurrentMood("rap")}
                  id="rap"
                  className={`bg-[#14141d] item-mood text-menuIcon  rounded-xl p-3 h-[84px] w-[84px] items-center flex flex-col justify-between cursor-pointer ${
                    mood === "rap" ? "active" : ""
                  }`}
                >
                  <GiGuitar className="text-3xl bi text-inherit" />
                  <span className="text-lg font-normal text-inherit">Rap</span>
                </div>
                <div
                  onClick={() => setCurrentMood("chill")}
                  id="chill"
                  className={`bg-[#14141d] item-mood text-menuIcon  rounded-xl p-3 h-[84px] w-[84px] items-center flex flex-col justify-between cursor-pointer ${
                    mood === "chill" ? "active" : ""
                  }`}
                >
                  <GiCoffeeCup className="text-3xl bi text-inherit" />
                  <span className="text-lg font-normal text-inherit">
                    Chill
                  </span>
                </div>
              </div>
              <div className="flex items-center w-full my-4 text-primary volume">
                <Stack
                  className="w-full"
                  spacing={2}
                  direction="row"
                  sx={{ mb: 1 }}
                  alignItems="center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    height="21"
                    viewBox="0 -6 21 21"
                    width="21"
                    className="mb-1 text-sm injected-svg"
                    data-src="/static/media/volume_low.b33e70b7060185a65abc28b05e465c8d.svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g fill="#5b5a67">
                      <path d="m6.66233 1.66753c-.13273.14653-.31371.229-.50255.229h-.6728c-.84724 0-1.68846.15532-2.48852.45947-1.52847.58107-2.640776 2.03112-2.895599 3.77485l-.0068505.04687c-.1280141.87599-.1280139 1.76857.0000003 2.64456l.0068502.04687c.254823 1.74375 1.367129 3.19375 2.895599 3.77485.80006.3041 1.64128.4595 2.48852.4595h.6728c.18884 0 .36982.0824.50255.229l.4937.545c1.90227 2.1002 5.17917 1.1068 5.81537-1.7629.6723-3.0327.6723-6.1965 0-9.22917-.6362-2.8697401-3.9131-3.863145-5.81537-1.76297z"></path>
                    </g>
                  </svg>
                  <Slider
                    className="range-volume"
                    onChange={handleChangeVolume}
                    value={valueVolume}
                    aria-label="Disabled slider"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    height="21"
                    viewBox="0 -6 21 21"
                    width="21"
                    className="mb-1 text-sm injected-svg"
                    data-src="/static/media/volume.c87198cbf3e3b9e1ff00e17a0f2cdc56.svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g fill="#5b5a67">
                      <path d="m6.66233 1.66753c-.13273.14653-.31371.229-.50255.229h-.6728c-.84724 0-1.68846.15532-2.48852.45947-1.52847.58107-2.640776 2.03112-2.895599 3.77485l-.0068505.04687c-.1280141.87599-.1280139 1.76857.0000003 2.64456l.0068502.04687c.254823 1.74375 1.367129 3.19375 2.895599 3.77485.80006.3041 1.64128.4595 2.48852.4595h.6728c.18884 0 .36982.0824.50255.229l.4937.545c1.90227 2.1002 5.17917 1.1068 5.81537-1.7629.6723-3.0327.6723-6.1965 0-9.22917-.6362-2.8697401-3.9131-3.863145-5.81537-1.76297z"></path>
                      <path d="m17.4036 1.03465c.287-.37512.7985-.425368 1.1423-.112233 1.5207 1.384813 2.4541 3.863153 2.4541 6.577603 0 2.71448-.9334 5.19278-2.4541 6.57758-.3438.3131-.8553.2629-1.1423-.1122-.2871-.3751-.241-.9331.1029-1.2462 1.0651-.9699 1.8714-2.89278 1.8714-5.21918 0-2.32641-.8063-4.24925-1.8714-5.21918-.3439-.31313-.39-.87107-.1029-1.24619z"></path>
                      <path d="m16.3138 4.40489c-.3725-.27137-.8761-.16194-1.1248.24441-.2488.40636-.1485.95577.224 1.22714.4022.293.7208.88524.7208 1.62357 0 .73834-.3186 1.33058-.7208 1.62358-.3725.27137-.4728.82078-.224 1.22711.2487.4064.7523.5158 1.1248.2444.8908-.64885 1.442-1.81708 1.442-3.09509 0-1.278-.5512-2.44623-1.442-3.09512z"></path>
                    </g>
                  </svg>
                </Stack>
              </div>
              <div className="flex flex-col background-noise">
                <h4 className="text-xl font-semibold text-white ">
                  Background noises
                </h4>
                <div className="flex flex-col noise-container">
                  <div className="flex items-center my-4">
                    <p className="text-base w-[94px] flex-shrink-0 font-medium whitespace-nowrap text-textMenu">
                      City traffic
                    </p>

                    <Stack
                      className="flex-1 px-4 mb-0 track-slider "
                      spacing={2}
                      direction="row"
                      sx={{ mb: 1 }}
                      alignItems="center"
                    >
                      <Slider
                        className="range-volume"
                        defaultValue={30}
                        aria-label="Disabled slider"
                        onChange={(e) => setVolumeTraffic(e.target.value)}
                      />
                    </Stack>
                    <ReactAudioPlayer
                      src={cityTraffic}
                      volume={volumeTraffic / 100}
                      autoPlay
                      loop
                      preload="auto"
                    />
                  </div>

                  <div className="flex items-center my-4">
                    <p className="text-base w-[94px] flex-shrink-0 font-medium whitespace-nowrap text-textMenu">
                      Storm
                    </p>

                    <Stack
                      className="flex-1 px-4 mb-0 track-slider "
                      spacing={2}
                      direction="row"
                      sx={{ mb: 1 }}
                      alignItems="center"
                    >
                      <Slider
                        className="range-volume"
                        defaultValue={30}
                        aria-label="Disabled slider"
                        onChange={(e) => setVolumeStorm(e.target.value)}
                      />
                    </Stack>
                    <ReactAudioPlayer
                      volume={volumeStorm / 100}
                      src={summerStorm}
                      autoPlay
                      preload="auto"
                      loop
                    />
                  </div>
                  <div className="flex items-center my-4">
                    <p className="text-base w-[94px] flex-shrink-0 font-medium whitespace-nowrap text-textMenu">
                      Fireplace
                    </p>

                    <Stack
                      className="flex-1 px-4 mb-0 track-slider "
                      spacing={2}
                      direction="row"
                      sx={{ mb: 1 }}
                      alignItems="center"
                    >
                      <Slider
                        className="range-volume"
                        defaultValue={30}
                        aria-label="Disabled slider"
                        onChange={(e) => setVolumeFire(e.target.value)}
                      />
                    </Stack>
                    <ReactAudioPlayer
                      src={firePlace}
                      volume={volumeFire / 100}
                      loop
                      preload="auto"
                      autoPlay
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="line w-full h-[3px] bg-textMenu"></div>
        <div className="text-4xl cursor-pointer text-textMenu">
          <GiBookmarklet />
        </div>
      </div>
    </StyledPopup>
  );
};

export default PopupMenu;
