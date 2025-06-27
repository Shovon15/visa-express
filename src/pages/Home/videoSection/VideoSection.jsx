// eslint-disable-next-line no-unused-vars
import React from "react";

const VideoSection = () => {
  return (
    <div className="w-full px-4 py-10 flex justify-center">
      <div className="relative w-full max-w-md pt-[100%] md:pt-[65%] lg:pt-[45%] xl:pt-[40%]">
        {" "}
        {/* 1:1 Aspect Ratio */}
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FVisaexpress7%2Fvideos%2F1760940308181961%2F&show_text=false&width=100%25"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          title="Visa Express Facebook Video"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoSection;
