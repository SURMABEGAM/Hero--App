import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import Allcharts from "../Recharts/Allcharts";

const AppDetails = () => {
  const { id } = useParams();
  const signleId = parseInt(id);
  const chartsData = useLoaderData();
  console.log(chartsData);
  const [details, setDetails] = useState(null);
  useEffect(() => {
    if (chartsData) {
      const single = chartsData.find((chartsData) => chartsData.id == signleId);
      setDetails(single);
    }
  }, [chartsData, signleId]);

  if (!details)
    return <p className="font-bold text-5xl">Loading or not found...</p>;
  return (
    <div className="max-w-5xl mx-auto p-5 mt-20">
      <div className="bg-white shadow-md rounded-xl p-6 flex gap-6">
        <div className="w-40 h-40 bg-gray-100 rounded-xl flex items-center justify-center">
          <img
            src={details.image}
            alt={details.title}
            className="w-full h-full object-contain rounded-xl"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-black">{details.title}</h1>
          <p className="text-blue-600 text-lg mt-1">{details.companyName}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <div>
              <p className="text-black">Downloads</p>
              <p className="text-green-600 text-xl font-bold">
                {details.download}
              </p>
            </div>
            <div>
              <p className="text-black">Average Rating</p>
              <p className="text-orange-500 text-xl font-bold">
                {details.ratingAvg}
              </p>
            </div>
            <div>
              <p className="text-black">Total Reviews</p>
              <p className="text-purple-600 text-xl font-bold">
                {details.reviews}
              </p>
            </div>
          </div>
          <Link to="/installation" state={details}>
            <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg">
              <p className="text-black">Install Now ({details.size} MB)</p>
            </button>
          </Link>
        </div>
      </div>
      {/* Ratings Section */}
      <div className="mt-10">
        <Allcharts ratings={details.ratings} />
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">
          Description:
          <small className="text-[16px] font-normal">{details.notes}</small>
        </h2>
      </div>
    </div>
  );
};

export default AppDetails;
