import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="w-screen h-[calc(100vh-80px)] flex overflow-hidden">
        {/* Leva strana sa tekstom */}
        <div className="flex-1 flex flex-col items-start justify-center ml-50 mr-30">
          <p className="text-lg font-light text-blue-500">Footsteps</p>
          <h1 className="text-6xl font-bold mb-4">
            Explore Belgrade Healthiest Way
          </h1>
          <h3 className="text-2xl mb-15 ml-10 mr-25">
            Get to know Belgrade with your feet without transport and traffic
            jams
          </h3>
          <Link
            to="/register"
            className="bg-blue-500 text-white px-12 py-3 rounded-4xl hover:bg-blue-600 transition ml-10"
          >
            Register
          </Link>
        </div>

        {/* Desna strana sa slikom */}
        <div className="flex-1 mr-10">
          <img
            className="h-full object-cover"
            src="/HeroPic.png"
            alt="Hero pic"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
