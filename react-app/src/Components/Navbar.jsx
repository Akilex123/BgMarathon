import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="flex justify-between w-screen h-20 text-center">
        <div className="ml-30 flex items-center">
          <img src="BgMarathon.png" alt="" className="h-23 w-23" />
          <h1 className="font-bold text-2xl">BgMarathon</h1>
        </div>
        <div
          className="flex gap-15  items-center mr-30
        "
        >
          <Link
            to="/"
            className="text-lg px-4 py-2 rounded-4xl hover:bg-blue-500 transition duration-400 hover:text-white"
          >
            Home
          </Link>
          <Link
            to="/register"
            className="text-lg px-4 py-2 rounded-4xl hover:bg-blue-500 transition duration-400 hover:text-white"
          >
            Register
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
