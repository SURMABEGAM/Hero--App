import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Swal from "sweetalert2";

const Installation = () => {
  const location = useLocation();
  const newApp = location.state;

  const [installedApps, setInstalledApps] = useState(() => {
    const saved = localStorage.getItem("installedApps");
    return saved ? JSON.parse(saved) : [];
  });

  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    localStorage.setItem("installedApps", JSON.stringify(installedApps));
  }, [installedApps]);

  useEffect(() => {
    if (newApp) {
      setInstalledApps((prev) => {
        const exists = prev.some((app) => app.id === newApp.id);
        return exists ? prev : [...prev, newApp];
      });
    }
  }, [newApp]);

  // const sortedApps = [...installedApps].sort((a, b) => {
  //   const sizeA = a.size || 0;
  //   const sizeB = b.size || 0;

  //   if (sortOrder === "asc") return sizeA - sizeB;
  //   if (sortOrder === "desc") return sizeB - sizeA;
  //   return 0;
  // });

  if (!newApp && installedApps.length === 0) {
    return <p className="text-center text-xl">No App Data Found</p>;
  }

  return (
    <div className="h-[150vh] mx-auto p-5 bg-blue-800 mt-20">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold text-white">Installed Apps</h1>

        {/* Sort Dropdown */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="w-full sm:w-auto text-base font-semibold border-2 rounded-lg px-4 py-2 focus:outline-none"
        >
          <option value="" className="text-gray-400">
            Sort By Size
          </option>
          <option value="desc">High-Low</option>
          <option value="asc">Low-High</option>
        </select>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        {installedApps.map((app) => (
          <div
            key={app.id}
            className="bg-white shadow-md rounded-xl p-6 flex justify-between items-center"
          >
            {/* Left Side: Image + Info */}
            <div className="flex gap-6 items-center">
              <img
                src={app.image}
                alt={app.title}
                className="w-32 h-32 object-cover rounded-2xl"
              />

              <div>
                <h2 className="text-2xl font-bold text-blue-700">
                  {app.title}
                </h2>
                <p className="font-semibold text-black">{app.companyName}</p>

                <div className="flex  gap-3">
                  <div>
                    <p className="text-black font-[10px] ">Downloads</p>
                    <p className="text-green-600 text-xl font-bold">
                      <img
                        src={`/icon-downloads.png`}
                        alt="download"
                        className="w-[20px] has-[20px] rounded-b-sm"
                      />
                      {app.download}
                    </p>
                  </div>

                  <div>
                    <p className="text-black font-[10px]">Average Rating</p>
                    <p className="text-orange-500 text-xl font-bold ">
                      <img
                        src={`/icon-ratings.png`}
                        alt="raatings"
                        className="w-[20px] has-[20px] rounded-b-sm"
                      />{" "}
                      {app.ratingAvg}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Stats + Button */}

            <button
              onClick={() => {
                Swal.fire({
                  title: "Are you sure?",
                  text: "Do you want to uninstall this app?",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonText: "Yes, Uninstall",
                  cancelButtonText: "Cancel",
                  customClass: {
                    popup: "custom-popup-border",
                  },
                }).then((result) => {
                  if (result.isConfirmed) {
                    // Uninstall action
                    setInstalledApps((prev) =>
                      prev.filter((a) => a.id !== app.id)
                    );

                    // Success message
                    Swal.fire({
                      title: "Uninstalled!",
                      text: "The app has been removed.",
                      icon: "success",
                      timer: 1500,
                      showConfirmButton: false,
                      customClass: {
                        popup: "custom-popup-border",
                      },
                    });
                  }
                });
              }}
              className="bg-red-400 hover:bg-red-600 text-white px-6 py-2 rounded-xl font-semibold transition"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
