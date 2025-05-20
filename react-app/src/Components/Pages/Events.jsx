import React from "react";
import Countdown from "react-countdown";

function Events() {
  const eventDate = new Date("2025-06-04T09:00:00");

  return (
    <>
      <div className="w-full ">
        <iframe
          className="w-full h-screen rounded-lg"
          src="https://www.youtube.com/embed/L9FMs2xZlpo"
          title="Youtube video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="text-center text-black text-9xl font-bold mb-10 mt-7">
        <Countdown date={eventDate}></Countdown>
      </div>
      <div className=" w-screen mb-10 px-40">
        <div className=" flex gap-5 mb-5">
          <div className=" flex-1/2 h-90 border   rounded-2xl bg-white  shadow-md transition-transform duration-300 hover:shadow-xl hover:scale-105">
            10k
          </div>
          <div className="  flex-1/2 h-90 border  rounded-2xl  bg-white  shadow-md transition-transform duration-300 hover:shadow-xl hover:scale-105">
            42k
          </div>
        </div>
        <div className=" flex gap-5 mb-5">
          <div className=" flex-1/2 h-90 border   rounded-2xl bg-white  shadow-md transition-transform duration-300 hover:shadow-xl hover:scale-105">
            10k
          </div>
          <div className="  flex-1/2 h-90 border  rounded-2xl  bg-white  shadow-md transition-transform duration-300 hover:shadow-xl hover:scale-105">
            42k
          </div>
        </div>
      </div>
    </>
  );
}

export default Events;
