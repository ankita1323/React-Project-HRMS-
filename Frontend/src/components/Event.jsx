import React, { useState } from "react";
import "../CSS/calendar.css";





const MyCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const today = new Date();
  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

  const daysInMonth = [...Array(endOfMonth.getDate()).keys()].map((d) => d + 1);
  const startDay = startOfMonth.getDay(); // 0 (Sun) to 6 (Sat)

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  return (
    <div className="calendar  pt-20">
      <header>
        <button onClick={previousMonth}>{"<"}</button>
        <h2 className="font-">
          {currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
        </h2>
        <button onClick={nextMonth}>{">"}</button>
      </header>
      <div className="days-grid">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div className="day-header" key={d}>
            {d}
          </div>
        ))}
       {Array(startDay).fill(null).map((_, idx) => (
          <div className="day-empty" key={`empty-${idx}`}></div>
        ))}
        {daysInMonth.map((day) => {
          const dayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
          const isToday = dayDate.toDateString() === today.toDateString(); // Highlight today

          return (
            <div className={`day ${isToday ? "today" : ""}`} key={day}>
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyCalendar;
