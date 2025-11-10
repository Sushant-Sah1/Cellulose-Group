import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* Top Bar */}
      <div className="bg-[#40756f] py-2">
        <div className="w-[65%] m-auto text-white text-lg tracking-wide">
          Indian Institute of Technology Hyderabad
        </div>
      </div>

      {/* Main Header with Logo + Title */}
      <div className="bg-[#2bbbad] py-6 shadow-md">
        <div className="w-[80%] m-auto flex items-center justify-center gap-6">
          {/* Logo */}
          <img
            src="https://people.iith.ac.in/mudrika/img/logo.JPG"
            alt="Cellulose Group Logo"
            className="h-20 w-auto rounded-lg shadow-md bg-white p-2"
          />

          {/* Group Title */}
          <h1 className="text-white text-4xl font-semibold tracking-wide">
            The Cellulose Group
          </h1>
        </div>

        {/* Navigation Menu */}
        <div className="w-[80%] m-auto mt-6">
          <nav className="flex justify-center gap-10 text-white text-lg font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-white pb-1"
                  : "hover:text-gray-200"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/Projects"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-white pb-1"
                  : "hover:text-gray-200"
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/Publications"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-white pb-1"
                  : "hover:text-gray-200"
              }
            >
              Publications
            </NavLink>
            <NavLink
              to="/Recognition"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-white pb-1"
                  : "hover:text-gray-200"
              }
            >
              Recognition
            </NavLink>
            <NavLink
              to="/People"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-white pb-1"
                  : "hover:text-gray-200"
              }
            >
              People
            </NavLink>
            <NavLink
              to="/Facility"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-white pb-1"
                  : "hover:text-gray-200"
              }
            >
              Facility
            </NavLink>
            <NavLink
              to="/Teaching"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-white pb-1"
                  : "hover:text-gray-200"
              }
            >
              Teaching
            </NavLink>
            <NavLink
              to="/Opportunity"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-white pb-1"
                  : "hover:text-gray-200"
              }
            >
              Opportunity
            </NavLink>
            <NavLink
              to="/COVID"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-white pb-1"
                  : "hover:text-gray-200"
              }
            >
              COVID
            </NavLink>
            <NavLink
              to="/Additional"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-white pb-1"
                  : "hover:text-gray-200"
              }
            >
              Additional
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
