import React from "react";
import hero from "../../assets/hero.png";
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-base-200  flex flex-col justify-center items-center p-0 mt-20 ">
      {/* --- Text Section --- */}
      <div className="text-center max-w-2xl space-y-6">
        <h1 className="text-4xl lg:text-5xl font-bold mt-6">
          We Build <br />
          <span className="text-blue-500 font-extrabold">Productive</span> Apps
        </h1>
        <p className="text-gray-600 leading-relaxed">
          At <span className="font-semibold text-blue-600">HERO.IO</span>, we
          craft innovative apps designed to make everyday life simpler, smarter,
          and more exciting. Our goal is to turn your ideas into digital
          experiences that truly make an impact.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
          <button className="flex items-center gap-2 px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg shadow-md transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <FaAppStoreIos className="text-lg" /> Login with App Store
          </button>

          <button className="https://play.google.com/store/apps?hl=en  flex items-center gap-2 px-5 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg shadow-md transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400">
            <FaGooglePlay className="text-lg" /> Login with Google Play
          </button>
        </div>
      </div>

      {/* --- Image Section --- */}
      <div className="mt-10 mb-0">
        <img
          src={hero}
          alt="hero"
          className="w-full max-w-[600px] object-cover rounded-none shadow-none
        mb-0 p-0"
        />
      </div>
    </div>
  );
};

export default Banner;
