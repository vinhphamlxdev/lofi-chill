import React from "react";
import Header from "~/components/header";
import Player from "~/components/playerControl";
import PopupMenu from "../popup";
import Video from "./Video";
const BackgRound = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden background-main">
      <Header />
      <Video />
      <Player />
      <PopupMenu />
    </div>
  );
};

export default BackgRound;
