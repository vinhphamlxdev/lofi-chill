import React, { useEffect, useRef, useState } from "react";
import logo from "~/assets/logo.gif";
import styled from "styled-components";
import { FiLogOut } from "react-icons/fi";
import DarkMode from "./toggle";
import fullScreen from "~/assets/fullscreen.svg";
import userIcon from "~/assets/user.svg";
import settingIcon from "~/assets/settings.svg";
import spotify from "~/assets/spotify.svg";
import { useNavigate } from "react-router-dom";
import { FaCloudRain } from "react-icons/fa";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useDispatch, useSelector } from "react-redux";
import rainMp3 from "~/assets/songs/rain.mp3";
import { toast } from "react-toastify";
import {
  setUser,
  setValueVolumeRain,
  toggleRainStatus,
} from "~/redux-toolkit/global/globalSlice";
import { Slider, Stack } from "@mui/material";
import { signOut } from "firebase/auth";
import { authentication } from "../firebase/config";
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
  & .user-info {
    top: 44px;
    z-index: 100;
  }

  .user-avatar:hover .user-info {
    display: flex;
  }
  .user-info::after {
    content: "";
    height: 30px;
    position: absolute;
    top: -19px !important;
    width: 100%;
    z-index: 100;
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const [rain, setRain] = useState("rain");
  const { rainValueVolume, user } = useSelector((state) => state.global);
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
  const handleLogout = () => {
    signOut(authentication)
      .then(() => {
        dispatch(setUser(undefined));
      })
      .catch((error) => {
        console.log(error);
      });
    toast.success("Logout successfully");
    console.log("logout user:", user);
  };
  return (
    <StyledNavbar className="h-20 sx:px-3 lg:px-6 z-50 flex justify-between items-center px-[48px] fixed w-full">
      <div className="relative sx:w-[100px] max-w-[150px]  max-h-[150px]">
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
        <div
          onClick={() => toast.error("Tính năng chưa được cập nhật")}
          className="premium ms:hidden cursor-pointer  rounded-lg text-sm p-[5px] text-white "
        >
          <div className="flex items-center gap-2">
            <h3>🚀</h3>
            <p className="bold">
              Access +20 scenes <br />& more with premium
            </p>
          </div>
        </div>
        {!user && (
          <button
            onClick={() => navigate("/sign-in")}
            className="text-sm whitespace-nowrap  text-white hover:opacity-50 transition-all duration-300 rounded-lg bg-signIn py-[5px] px-4 font-medium"
          >
            Sign In
          </button>
        )}
        {user && (
          <div className="relative w-8 h-8 rounded-full cursor-pointer user-avatar">
            <img
              className="object-cover w-full rounded-full"
              src={user.photoURL}
              alt=""
            />
            <div className="absolute z-50  after:absolute after:content-[''] after:w-full after:bg-transparent after:h-4 after:z-20   hidden  rounded-lg  bg-[#070707] w-[170px]  user-info transition-all duration-500   flex-col   -left-[140px]">
              <div
                onClick={() => toast.error("Tính năng chưa được cập nhật")}
                className="text-white top-[44px] rounded-tl-md rounded-tr-md  items-center gap-4 hover:bg-primary bg-[#070707] px-3 py-[6px] flex flex-row transition-all"
              >
                <div className="w-[14px] flex items-center h-[14px] relative">
                  <img className="object-cover w-full" src={userIcon} alt="" />
                </div>
                <p className="text-sm font-normal text-white whitespace-nowrap">
                  User settings
                </p>
              </div>
              <div
                onClick={() => toast.error("Tính năng chưa được cập nhật")}
                className="text-white top-[-43px]  items-center gap-4 hover:bg-primary bg-[#070707] px-3 py-[6px] flex flex-row transition-all"
              >
                <div className="w-[14px] flex items-center h-[14px] relative">
                  <img
                    className="object-cover w-full"
                    src={settingIcon}
                    alt=""
                  />
                </div>
                <p className="text-sm font-normal text-white whitespace-nowrap">
                  General settings
                </p>
              </div>
              <div
                onClick={() => toast.error("Tính năng chưa được cập nhật")}
                className="text-white top-[-43px]  items-center gap-4 hover:bg-primary bg-[#070707] px-3 py-[6px] flex flex-row transition-all"
              >
                <div className="w-[14px] flex items-center h-[14px] relative">
                  <img className="object-cover w-full" src={spotify} alt="" />
                </div>
                <p className="text-sm font-normal text-white whitespace-nowrap">
                  Playlist
                </p>
              </div>
              <div
                onClick={handleLogout}
                className="text-white rounded-bl-md rounded-br-md  top-[-43px]  items-center gap-4 hover:bg-primary bg-[#070707] px-3 py-[6px] flex flex-row transition-all"
              >
                <div className="w-[14px] flex items-center h-[14px] relative">
                  <FiLogOut className="text-2xl font-semibold text-white" />
                </div>
                <p className="text-sm font-normal text-white whitespace-nowrap">
                  LogOut
                </p>
              </div>
            </div>
          </div>
        )}
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
