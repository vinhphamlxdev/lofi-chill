import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import DayBg from "~/assets/video/Day.mp4";
import NightBg from "~/assets/video/Night.mp4";
import RainDaybg from "~/assets/video/RainDay.mp4";
import RainNightBg from "~/assets/video/RainNight.mp4";

const Video = () => {
  const currentStatus = useSelector((state) => state.global);
  const { mode, rainMode } = currentStatus;
  const statusDayNight = `${mode}`;
  const statusRain = `${rainMode}-${mode}`;

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Video;
