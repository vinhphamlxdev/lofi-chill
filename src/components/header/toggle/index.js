import React, { useState } from "react";
import { put, takeEvery } from "redux-saga/effects";
import styled from "styled-components";
const StyledDarkmode = styled.div`
  margin-left: 8px;
  margin-right: 8px;
  transition: all 0.5s;
  .dark-mode {
    height: 22px;
    width: 40px;
    transform: scale(1.4);

    .spinner {
      top: 50%;
      transform: translateY(-50%);
      left: calc(100% - 20px);
    }
    &.active .spinner {
      right: calc(100% - 20px);
      left: auto;
    }
  }
`;

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <StyledDarkmode>
      <button
        onClick={handleDarkMode}
        className={`relative rounded-full transition-all duration-500 bg-primary dark-mode ${
          darkMode ? "active" : ""
        }`}
      >
        <div
          className={`absolute w-4 h-4 transition-all duration-500 bg-white rounded-full spinner ${
            darkMode ? "active" : ""
          }`}
        ></div>
      </button>
    </StyledDarkmode>
  );
};

export default DarkMode;
