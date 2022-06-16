import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
const VideoYoutube = () => {
  const [url, setUrl] = useState("");
  const [submit, setSubmit] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };
  return (
    <div className="absolute ms:hidden ml-5  left-0 h-[150px]  flex flex-col  top-2/4 -translate-y-2/4 mr-auto z-20 w-[200px]   ">
      <div className="flex-1 video-youtube">
        {submit && (
          <>
            <ReactPlayer
              width={"200px"}
              height={"150px"}
              loop={true}
              controls={true}
              url={url}
            />
            <button
              onClick={() => setSubmit(false)}
              className="text-sm w-full text-center mt-[10px] cursor-pointer bg-[#1e1e1e] px-4 py-2 rounded-md leading-3 text-gray-500 font-normal hover:text-white"
            >
              Choose another video
            </button>
          </>
        )}
      </div>
      {!submit && (
        <div className="flex">
          <div className="items-center flex mt-[10px]">
            <form className="flex form-submit">
              <input
                onChange={(e) => setUrl(e.target.value)}
                className="p-1 leading-[0px] text-gray-500 rounded-sm bg-slate-300"
                type="text"
                placeholder="URL Youtube"
              />
              <button
                type="submit"
                onClick={handleSubmit}
                className="px-2 py-1  rounded-sm bg-[#1e1e1e] ml-2 cursor-pointer text-sm text-gray-500 hover:text-white transition-all duration-500"
              >
                Play
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoYoutube;
