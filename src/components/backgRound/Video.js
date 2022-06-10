import React from "react";
import video from "~/assets/video/Night.mp4";
import SunnyDay from "~/assets/video/SunnyDay.mp4";
import styled from "styled-components";
const StyledVideo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  transition: opacity 0.5s ease-in-out;
  video {
    user-select: none;
    object-fit: contain;
  }
`;

const Video = () => {
  return (
    <StyledVideo>
      <video autoPlay loop muted src={SunnyDay}></video>
    </StyledVideo>
  );
};

export default Video;
