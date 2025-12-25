import React from "react";
import Banner from "./Banner";
import Card from "./Card";
import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div
        className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] 
  w-full text-white px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-16"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-10">
            Trusted By Millions, Built For You
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {/* Downloads */}
            <div>
              <h2 className="text-xs sm:text-sm uppercase tracking-wide opacity-80 mb-2">
                Total Downloads
              </h2>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold">
                29.6M
              </p>
              <p className="text-xs sm:text-sm opacity-75 mt-1">
                21% More Than Last Month
              </p>
            </div>

            {/* Reviews */}
            <div>
              <h2 className="text-xs sm:text-sm uppercase tracking-wide opacity-80 mb-2">
                Total Reviews
              </h2>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold">906K</p>
              <p className="text-xs sm:text-sm opacity-75 mt-1">
                46% More Than Last Month
              </p>
            </div>

            {/* Apps */}
            <div>
              <h2 className="text-xs sm:text-sm uppercase tracking-wide opacity-80 mb-2">
                Active Apps
              </h2>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold">132+</p>
              <p className="text-xs sm:text-sm opacity-75 mt-1">
                31 More Will Launch
              </p>
            </div>
          </div>
        </div>
      </div>

      <Card></Card>
      <Link to="/apps">
        <button
          className="px-5 py-2 border-2 border-b-purple-800  border-t-purple-800  text-blue-600 font-semibold 
  rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-200 mx-auto block"
        >
          Show More
        </button>
      </Link>
    </div>
  );
};

export default Home;
