import React, { useState } from "react";
import {
  FaCheck,
  FaTimes,
  FaCircle,
} from "react-icons/fa"; // Import necessary icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFaceGrinTears } from "@fortawesome/free-regular-svg-icons";

import "../CSS/calendar.css";
const MyCalendar = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date());

  const attendanceData = {
    "2024-11-01": "present",
    "2024-11-05": "half-day",
    "2024-11-07": "present",
    "2024-11-22": "absent",
  };

  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

  const daysInMonth = [...Array(endOfMonth.getDate()).keys()].map((d) => d + 1);
  const startDay = startOfMonth.getDay();

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const getAttendanceSymbol = (dayDate) => {
    const dateString = dayDate.toLocaleDateString("en-CA");
    const status = attendanceData[dateString];
    if (status === "present") {
      return <FaCheck style={{ color: "green" }} />;
    }
    if (status === "absent") {
      return <FaTimes style={{ color: "red" }} />;
    }
    if (status === "half-day") {
      return <FaCircle style={{ color: "rgb(181, 181, 31)" }} />
    }
    if (dayDate.getDay() === 0 || dayDate.getDay() === 6) {
      return <FontAwesomeIcon icon={faFaceGrinTears} style={{ color: "orange" }} />;
    }
    return null;
  };

  const handleMonthChange = (event) => {
    const selectedMonth = parseInt(event.target.value);
    setCurrentDate(new Date(currentDate.getFullYear(), selectedMonth, 1));
  };

  const handleYearChange = (event) => {
    const selectedYear = parseInt(event.target.value);
    setCurrentDate(new Date(selectedYear, currentDate.getMonth(), 1));
  };

  const generateYearOptions = () => {
    const currentYear = today.getFullYear();
    const years = [];
    for (let i = currentYear - 10; i <= currentYear + 10; i++) {
      years.push(i);
    }
    return years;
  };

  return (
    <div className="calendar mt-10 pt-10  border border-grey-700 shadow-xl shadow-slate-400">
       <header className="flex items-center  bg-slate-100 justify-between mb-6">
        <button
          onClick={previousMonth}
          className="bg-green-700 p-2 rounded border  hover:bg-green-500"
        >
          {"<"}
        </button>

        <h2 className="flex items-center space-x-4 text-xl font-semibold">
  <select
    className="month-dropdown p-2 rounded border border-blue-800 text-black hover:border-blue-500"
    onChange={handleMonthChange}
    value={currentDate.getMonth()} // Set value to currentDate.getMonth()
  >
    {[
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ].map((month, index) => (
      <option value={index} key={month}>
        {month}
      </option>
    ))}
  </select>

  <select
    className="year-dropdown p-2 px-10 rounded border border-blue-800 text-black hover:border-blue-500"
    onChange={handleYearChange}
    value={currentDate.getFullYear()} // Set value to currentDate.getFullYear()
  >
    {generateYearOptions().map((year) => (
      <option value={year} key={year}>
        {year}
      </option>
    ))}
  </select>
</h2>
        <button
          onClick={nextMonth}
          className="bg-green-700 p-2 rounded hover:bg-green-500"
        >
          {">"}
        </button>
      </header>
      <div className="days-grid ">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div className="day-header bg-green-700 text-white" key={d}>
            {d}
          </div>
        ))}
        {Array(startDay)
          .fill(null)
          .map((_, idx) => (
            <div className="day-empty" key={`empty-${idx}`}></div>
          ))}
        {daysInMonth.map((day) => {
          const dayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
          const isToday = dayDate.toDateString() === today.toDateString();

          return (
            <div className={`day ${isToday ? "today" : ""}`} key={day}>
              <div>{day}</div>
              <div className="symbol">{getAttendanceSymbol(dayDate)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyCalendar;