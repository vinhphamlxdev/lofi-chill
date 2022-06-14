import React, { useState } from "react";

const VideoYoutube = () => {
  const [url, setUrl] = useState("");
  const [chooseUrl, setChooseUrl] = useState(false);
  const handleChooseUrl = () => {
    setChooseUrl(!chooseUrl);
  };
  return (
    <div className="absolute  left-0 h-[150px]  flex flex-col  top-2/4 -translate-y-2/4 mr-auto z-20 w-[200px]   ">
      {/* <div className="flex-1 video-youtube">
        <iframe
          className="w-full "
          width=""
          height=""
          src="https://www.youtube.com/embed/WL4dL3R6Pac?list=PL_-VfJajZj0XHWBAxzGh1bZPACRbjbro3"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div> */}
      <div className="flex">
        <button
          onClick={handleChooseUrl}
          className={`text-sm mt-[10px] cursor-pointer bg-[#1e1e1e] px-4 py-2 rounded-md leading-3 text-gray-500 font-normal hover:text-white ${
            chooseUrl ? "hidden" : ""
          }`}
        >
          Choose another video
        </button>
        <div
          onClick={handleChooseUrl}
          className={`items-center mt-[10px]   ${
            chooseUrl ? "flex" : "hidden"
          }`}
        >
          <div className="form-submit">
            <input
              className="p-1 leading-[0px] text-gray-500 rounded-sm bg-slate-300"
              type="text"
              placeholder="URL Youtube"
            />
          </div>
          <button className="px-2 py-1 rounded-sm bg-[#1e1e1e] ml-2 cursor-pointer text-sm text-gray-500 hover:text-white transition-all duration-500">
            Play
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoYoutube;
