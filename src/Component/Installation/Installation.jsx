import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

const Installation = () => {
  const location = useLocation();
  // const appData = location

  const newApp = location.state;

  const [installedApps, setInstalledApps] = useState(() => {
    const saved = localStorage.getItem("installedApps");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("installedApps", JSON.stringify(installedApps));
  }, [installedApps]);

  useEffect(() => {
    if (newApp) {
      setInstalledApps((prev) => {
        const exists = prev.some((app) => app.id === newApp.id);
        if (!exists) {
          return [...prev, newApp];
        }
        return prev;
      });
    }
  }, [newApp]);

  const appData = location.state;
  if (!appData) return <p className="text-center text-xl">No App Data Found</p>;

  return (
    <div className="max-w-5xl mx-auto p-5 mt-20">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Installed Apps</h1>
      <div className="flex flex-col gap-6">
        {installedApps.map((app) => (
          <div
            key={app.id}
            className="bg-white shadow-md rounded-xl p-6 flex gap-6 justify-between"
          >
            <img
              src={app.image}
              alt={app.title}
              className="w-32 h-32 object-cover rounded-2xl"
            />
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-blue-700">{app.title}</h2>
              <p className=" font-semibold">{app.companyName}</p>
            </div>
            <button
              onClick={() =>
                setInstalledApps((prev) => prev.filter((a) => a.id !== app.id))
              }
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-xl"
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
