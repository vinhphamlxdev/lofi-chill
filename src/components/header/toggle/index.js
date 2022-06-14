import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "~/redux-toolkit/darkmode/darkModeSlice";
import Tippy from "@tippyjs/react";

const StyledDarkmode = styled.div`
  margin-left: 8px;
  margin-right: 8px;
  transition: all 0.5s;
  .dark-mode {
    height: 22px;
    width: 45px;
    transform: scale(1.4);
    transition: 0.5s ease-in-out;

    .spinner {
      top: 50%;
      transform: translateY(-50%);
      left: calc(100% - 20px);
      transition: 1s ease-in-out;
    }
    &.active .spinner {
      right: calc(100% - 20px);
      left: auto;
      transition: 1s ease-in-out;
    }
    &.active {
      background-color: rgba(0, 0, 0, 0.6);
    }
  }
`;

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [backgRound, setBackgRound] = useState("night");
  const dispatch = useDispatch();

  const ToggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (backgRound === "day") {
      setBackgRound("night");
    } else if (backgRound === "night") {
      setBackgRound("day");
    }
    dispatch(toggleDarkMode(backgRound));
  };
  return (
    <StyledDarkmode>
      <Tippy interactive content="DarkMode">
        <button
          onClick={ToggleDarkMode}
          className={`relative rounded-full  bg-primary dark-mode ${
            darkMode ? "active" : ""
          }`}
        >
          <i className="absolute left-2 text-[10px] leading-[0] top-2/4 -translate-y-2/4 bi bi-sun-fill"></i>
          <div
            className={`absolute w-4 h-4  bg-white rounded-full spinner ${
              darkMode ? "active" : ""
            }`}
          ></div>
          <i className="absolute right-2 text-[10px] leading-[0] top-2/4 -translate-y-2/4 bi bi-moon-fill"></i>
        </button>
      </Tippy>
    </StyledDarkmode>
  );
};

export default DarkMode;
