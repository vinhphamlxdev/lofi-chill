import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import DayBg from "~/assets/video/Day.mp4";
import NightBg from "~/assets/video/Night.mp4";
import RainDaybg from "~/assets/video/RainDay.mp4";
import RainNightBg from "~/assets/video/RainNight.mp4";
const StyledVideo = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease-in-out;
  video {
    position: absolute;
    user-select: none;
    object-fit: cover;
    transition: 1s all;
  }
`;

const Video = () => {
  const currentStatus = useSelector((state) => state.darkMode);
  const { mode, rainMode } = currentStatus;
  const statusDayNight = `${mode}`;
  const statusRain = `${rainMode}-${mode}`;
  console.log(statusRain);

  return (
    <StyledVideo>
      <video
        className={`${statusDayNight === "day" ? "video-in" : "video-out"}`}
        autoPlay
        muted
        loop
      >
        <source src={DayBg} type="video/mp4" />
      </video>
      <video
        className={`${statusDayNight === "night" ? "video-in" : "video-out"}`}
        autoPlay
        muted
        loop
      >
        <source src={NightBg} type="video/mp4" />
      </video>
      <video
        className={`${statusRain === "rain-day" ? "video-in" : "video-out"}`}
        autoPlay
        muted
        loop
      >
        <source src={RainDaybg} type="video/mp4" />
      </video>
      <video
        className={`${statusRain === "rain-night" ? "video-in" : "video-out"}`}
        autoPlay
        muted
        loop
      >
        <source src={RainNightBg} type="video/mp4" />
      </video>
    </StyledVideo>
  );
};

export default Video;
