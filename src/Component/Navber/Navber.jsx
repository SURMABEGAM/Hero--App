import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, NavLink } from "react-router";

const Navber = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full bg-white backdrop-blur-md shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={`logo.png`} alt="Hero App" className="w-10 h-10" />
          <span className="text-2xl font-bold text-blue-600">Hero App</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-semibold">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-blue-600 transition pb-1 ${
                  isActive ? "border-b-2 border-blue-600" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                `hover:text-blue-600 transition pb-1 ${
                  isActive ? "border-b-2 border-blue-600" : ""
                }`
              }
            >
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/installation"
              className={({ isActive }) =>
                `hover:text-blue-600 transition pb-1 ${
                  isActive ? "border-b-2 border-blue-600" : ""
                }`
              }
            >
              Installation
            </NavLink>
          </li>
        </ul>

        {/* GitHub Icon */}
        <a
          href="https://github.com"
          target="_blank"
          className="hidden md:flex items-center gap-2 text-gray-700 hover:text-black text-xl font-semibold"
        >
          <FaGithub className="text-2xl" />
          GitHub
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-md py-4 px-6 animate-fadeIn">
          <ul className="flex flex-col gap-4 text-gray-700 font-semibold">
            <li>
              <Link to="/" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/apps" onClick={() => setOpen(false)}>
                Apps
              </Link>
            </li>
            <li>
              <Link to="/installation" onClick={() => setOpen(false)}>
                Installation
              </Link>
            </li>
          </ul>

          <a
            href="https://github.com"
            target="_blank"
            className="mt-4 flex items-center gap-2  px-3 py-2 rounded-lg "
          >
            <FaGithub className="text-2xl text-blue-700" />
            <span className="font-semibold  text-blue-700">GitHub</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navber;
