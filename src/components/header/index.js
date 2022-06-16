import React, { useEffect, useRef, useState } from "react";
import logo from "~/assets/logo.gif";
import styled from "styled-components";
import DarkMode from "./toggle";
import fullScreen from "~/assets/fullscreen.svg";
import { FaCloudRain } from "react-icons/fa";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useDispatch, useSelector } from "react-redux";
import rainMp3 from "~/assets/songs/rain.mp3";
import {
  setValueVolumeRain,
  toggleRainStatus,
} from "~/redux-toolkit/global/globalSlice";
import { Slider, Stack } from "@mui/material";
const StyledNavbar = styled.div`
  & .premium {
    background-image: linear-gradient(
      269.36deg,
      rgba(225, 134, 96, 0.9) 23.92%,
      rgba(244, 202, 93, 0.9) 101.14%
    );
  }
  & .range-volume {
    height: 10px;
    color: #f3a952;
  }
  & .rain-btn:hover .rain-track {
    opacity: 1;
    visibility: visible;
  }
`;

const Header = () => {
  const audioRef = useRef(null);
  const [rain, setRain] = useState("rain");
  const { rainValueVolume } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  const toggleStatusRain = () => {
    if (rain === "rain") {
      setRain("");
      audioRef.current.play();
    } else {
      setRain("rain");
      audioRef.current.pause();
    }

    dispatch(toggleRainStatus(rain));
  };
  const elem = document.documentElement;
  const [fullScreenHand, setFullScreenHand] = useState(false);
  const handleFullScreen = () => {
    if (!fullScreenHand && elem.requestFullscreen) {
      setFullScreenHand(true);
      elem.requestFullscreen();
    } else {
      setFullScreenHand(false);
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };
  const handleChangeValueRain = (e) => {
    dispatch(setValueVolumeRain(e.target.value));
    if (rainValueVolume === 0) {
      dispatch(toggleRainStatus(""));
    } else {
      dispatch(toggleRainStatus("rain"));
    }
  };
  useEffect(() => {
    audioRef.current.volume = rainValueVolume / 100;
  }, [rainValueVolume]);
  return (
    <StyledNavbar className="h-20 z-50 flex justify-between items-center px-[48px] fixed w-full">
      <div className="relative max-w-[150px]  max-h-[150px]">
        <img
          className="w-full h-full align-middle border-none"
          src={logo}
          alt=""
        />
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="text-2xl cursor-pointer rain-btn ">
            <FaCloudRain
              onClick={toggleStatusRain}
              className=" hover:opacity-50"
            />
            <Stack
              className="absolute invisible opacity-0 rain-track w-[100px] "
              spacing={2}
              direction="row"
              sx={{ mb: 1 }}
              alignItems="center"
            >
              <Slider
                value={rainValueVolume}
                onChange={handleChangeValueRain}
                className="range-volume"
                defaultValue={30}
                aria-label="Disabled slider"
              />
            </Stack>
          </div>
        </div>
        <DarkMode />
        <Tippy content="Tính năng chưa được cập nhật">
          <div className="premium cursor-pointer  rounded-lg text-sm p-[5px] text-white ">
            <div className="flex items-center gap-2">
              <h3>🚀</h3>
              <p className="bold">
                Access +20 scenes <br />& more with premium
              </p>
            </div>
          </div>
        </Tippy>
        <button className="text-sm text-white hover:opacity-50 transition-all duration-300 rounded-lg bg-signIn py-[5px] px-4 font-medium">
          Sign In
        </button>
        <div
          onClick={handleFullScreen}
          className="w-[22px] justify-center flex items-center mt-[6px] cursor-pointer transition-all duration-300 hover:opacity-50 h-[22px] relative"
        >
          <img
            className="object-cover leading-[0] w-full"
            src={fullScreen}
            alt=""
          />
        </div>
      </div>
      {/* <ReactAudioPlayer preload="auto" src={rainMp3} autoPlay loop /> */}
      <audio loop ref={audioRef} src={rainMp3}></audio>
    </StyledNavbar>
  );
};

export default Header;
