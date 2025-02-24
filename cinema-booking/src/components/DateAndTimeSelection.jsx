import React from "react";

const DateAndTimeSelection = ({ setSelectedDate, setSelectedTime, setStep }) => {
  const dates = ["2025-01-22", "2025-01-23", "2025-01-24"];
  const times = ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"];

  return (
    <div className="date-time-selection">
      <h2>Select Date and Time</h2>
      <div>
        <h3>Date</h3>
        {dates.map((date, index) => (
          <button key={index} onClick={() => setSelectedDate(date)}>
            {date}
          </button>
        ))}
      </div>
      <div>
        <h3>Time</h3>
        {times.map((time, index) => (
          <button key={index} onClick={() => setSelectedTime(time)}>
            {time}
          </button>
        ))}
      </div>
      <button onClick={() => setStep(4)}>Next</button>
    </div>
  );
};

export default DateAndTimeSelection;
