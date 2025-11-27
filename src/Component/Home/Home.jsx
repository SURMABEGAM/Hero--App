import React from "react";
import Banner from "./Banner";
import Card from "./Card";
import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

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
