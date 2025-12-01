import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";

const Apps = () => {
  const appse = useLoaderData();
  const [search, setSearch] = useState("");
  // console.log(appse);
  const filteredProducts = appse.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="p-6 max-w-7xl mx-auto mt-20">
      <div className="justify-between flex items-center mb-6">
        <div>
          {" "}
          <h1 className="text-3xl font-bold mb-6">Popular Apps</h1>
        </div>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search apps..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered w-full max-w-md"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((app) => (
          <Link
            to={`/appdetails/${app.id}`}
            key={app.id}
            className=" p-4 rounded-lg hover:shadow-lg transition"
          >
            <div
              key={app.id}
              className="card bg-base-100 shadow-md hover:shadow-lg transition"
            >
              <figure>
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{app.title}</h2>
                <p>{app.description}</p>
                <div className="card-actions justify-between mt-4">
                  <button className="btn btn-primary">
                    <img
                      className="w-4 h-4 mr-1"
                      src={`/icon-downloads.png`}
                      alt="downloads"
                    />
                    {app.download}
                  </button>
                  <button className="btn btn-primary">
                    <img
                      className="w-4 h-4  mr-1"
                      src={`/icon-ratings.png`}
                      alt="rating"
                    />
                    {app.ratingAvg}
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Apps;
