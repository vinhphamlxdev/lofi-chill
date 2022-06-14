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
`;
