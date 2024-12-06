import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const TopBar = ({ toggleSidebar }) => {
  const [isPunchedIn, setIsPunchedIn] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const handlePunch = () => {
    if (isPunchedIn) {
      clearInterval(timer);
      setTimer(null);
    } else {
      const start = Date.now() - elapsedTime;
      setTimer(
        setInterval(() => {
          setElapsedTime(Date.now() - start);
        }, 1000)
      );
    }
    setIsPunchedIn(!isPunchedIn);
  };

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className={`bg-blue-800 text-white flex justify-between items-center p-3 pr-5 pl-5 shadow-md transition-all duration-300 fixed top-0 left-0 w-full z-50`}>
   
      {/* Button to toggle the sidebar */}
      <div className="flex items-center space-x-7">
        <button
          onClick={toggleSidebar}
          className="text-2xl p-2 hover:bg-gray-700 rounded-md"
        >
          <FaBars />
        </button>

        {/* Punch In/Out Button */}
        <button
          onClick={handlePunch}
          className={`px-4 py-2 text-sm font-semibold rounded ${
            isPunchedIn ? "bg-red-500" : "bg-green-500"
          }`}
        >
          {isPunchedIn ? "Punch Out" : "Punch In"}
        </button>

        {/* Timer */}
        <span className="text-lg font-mono">
          {isPunchedIn ? formatTime(elapsedTime) : "00:00:00"}
        </span>
      </div>

      {/* Search Bar */}
      <div className="hidden-sm flex-1 max-w-md ">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded bg-white-700 text-black placeholder-gray-400 focus:outline-none"
        />
      </div>

      {/* Profile and Notification */}
      <div className="flex items-center space-x-4 pr-5">
        <div className="relative">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <span className="absolute top-0 right-0 bg-red-500 text-xs text-white w-5 h-5 rounded-full flex items-center justify-center">
            3
          </span>
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
