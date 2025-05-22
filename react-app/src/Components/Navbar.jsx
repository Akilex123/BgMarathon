import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full h-20 px-6 md:px-12 text-black shadow-md">
      {/* Leva strana: Logo i naziv */}
      <div className="flex items-center space-x-4">
        <img src="BgMarathon.png" alt="Logo" className="h-12 w-12" />
        <h1 className="font-bold text-2xl">BgMarathon</h1>
      </div>

      {/* Desna strana: Linkovi */}
      <div className="flex space-x-6">
        <Link
          to="/"
          className="text-lg px-4 py-2 rounded-full hover:bg-blue-500 transition hover:text-white"
        >
          Home
        </Link>
        <Link
          to="/register"
          className="text-lg px-4 py-2 rounded-full hover:bg-blue-500 transition hover:text-white"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
