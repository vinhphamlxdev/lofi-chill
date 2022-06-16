import { css } from "styled-components";

export const GlobalClasses = css`
  body {
    color: #fff;
  }
  h3 {
    font-size: 32px;
    line-height: 32px;
    color: #fff;
  }
  video {
    position: absolute;
    width: 100%;
    height: 100%;
    user-select: none;
    object-fit: cover;
    transition: 1s all;
  }
  .item-mood.active {
    background-color: #f3a952;
    color: #fff;
  }
  .tippy-box {
    font-size: 12px;
  }
  .tippy-content {
    padding-top: 3px;
    padding-bottom: 3px;
  }
  .video-in {
    z-index: 1;
    object-fit: cover;
    position: absolute;
    opacity: 1;
    transition: opacity 1s;
  }
  .video-out {
    z-index: 1;
    object-fit: cover;
    position: absolute;
    opacity: 0;
    transition: opacity 1s;
  }
  .bold {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
  }
  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .song-name {
    position: relative;
    overflow: hidden;
    & p {
      height: 100%;
      -moz-animation: marquee 6s linear infinite;
      -webkit-animation: marquee 6s linear infinite;
      animation: marquee 6s linear infinite;
    }
  }
  @-moz-keyframes marquee {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  @-webkit-keyframes marquee {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  @keyframes marquee {
    0% {
      -moz-transform: translateX(100%);
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
    100% {
      -moz-transform: translateX(-100%);
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }
  }
`;
