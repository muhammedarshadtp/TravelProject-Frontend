import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";

const Calender = () => {
  const [dates, setDates] = useState([]);

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h2 className="text-xl font-semibold">Select Multiple Dates</h2>
      <DatePicker 
        multiple 
        value={dates} 
        onChange={setDates} 
        format="YYYY/MM/DD" 
        className="border p-2 rounded"
      />
      <div className="mt-4">
        <h3 className="font-medium">Selected Dates:</h3>
        <ul>
          {dates.map((date, index) => (
            <li key={index} className="text-blue-500">{date.toString()}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Calender;
