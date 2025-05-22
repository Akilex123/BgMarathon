import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="w-screen h-[calc(100vh-80px)] flex overflow-hidden relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/HeroPic.png')` }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="flex-1 flex flex-col items-start justify-center ml-10 mr-10 z-10 text-white">
        <h1 className="text-6xl font-bold mb-2">
          <span className="block text-blue-500 text-xl mb-1">Footsteps</span>
          Explore Belgrade the Healthiest Way
        </h1>
        <p className="text-lg font-light mb-6">
          Join us on our mission to make Belgrade a healthier and greener city
          through community walks and shared steps.
        </p>
        <Link
          to="/register"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-3xl font-semibold transition"
        >
          Join Now
        </Link>
      </div>
    </div>
  );
}
