import React from "react";
import Header from "~/components/header";
import Player from "~/components/playerControl";
import PopupMenu from "../popup";
import Video from "./Video";
const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden Home-main">
      <Header />
      <Video />
      <Player />
      <PopupMenu />
    </div>
  );
};

export default Home;
