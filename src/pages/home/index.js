import React from "react";
import Video from "~/components/backgRound/Video";
import Header from "~/components/header";
import Player from "~/components/playerControl";
import PopupMenu from "~/components/popup";
import VideoYoutube from "~/components/videoYotube";

const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden Home-main">
      <Header />
      <Video />
      <Player />
      <PopupMenu />
      <VideoYoutube />
    </div>
  );
};

export default Home;
