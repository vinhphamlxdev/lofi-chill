import React from "react";
import logo from "~/assets/logo.gif";
import styled from "styled-components";
import DarkMode from "./toggle";
import fullScreen from "~/assets/fullscreen.svg";
const StyledNavbar = styled.div`
  & .premium {
    background-image: linear-gradient(
      269.36deg,
      rgba(225, 134, 96, 0.9) 23.92%,
      rgba(244, 202, 93, 0.9) 101.14%
    );
  }
`;

const Header = () => {
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
        <DarkMode />
        <div className="premium cursor-pointer  rounded-lg text-sm p-[5px] text-white ">
          <div className="flex items-center gap-2">
            <h3>🚀</h3>
            <p className="bold">
              Access +20 scenes <br />& more with premium
            </p>
          </div>
        </div>
        <button className="text-sm text-white hover:opacity-50 transition-all duration-300 rounded-lg bg-signIn py-[5px] px-4 font-medium">
          Sign In
        </button>
        <div className="w-[22px] cursor-pointer transition-all duration-300 hover:opacity-50 h-[22px] relative">
          <img className="object-cover w-full" src={fullScreen} alt="" />
        </div>
      </div>
    </StyledNavbar>
  );
};

export default Header;
