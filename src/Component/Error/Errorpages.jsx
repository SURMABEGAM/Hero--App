import React from "react";
import { Link } from "react-router";

const Errorpages = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-6">
      <img src={`/error-404.png`} alt="404 Error" className="w-64 h-64" />
      <h1 className="text-7xl font-extrabold text-blue-600">404</h1>

      <h2 className="text-2xl font-semibold mt-4 text-gray-800">
        Page Not Found
      </h2>

      <Link
        to="/"
        className="mt-6 px-5 py-2 bg-blue-600 text-white font-semibold rounded-xl 
        hover:bg-blue-700 transition-all duration-200 shadow-md"
      >
        Go Home
      </Link>
    </div>
  );
};

export default Errorpages;
