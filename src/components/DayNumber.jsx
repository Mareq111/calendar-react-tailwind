import React from "react";

export default function DayNumber(props) {
  // ARRAY WITH DAYS TO MAX 31
  const dayNumbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  const dayNumberIndex = props.dayNumberIndex;
  const dayNumber = dayNumbers[dayNumberIndex];

  return (
   
    <div className="flex justify-center items-center w-full h-full">
      <div className=" font-semibold w-10 h-10 flex items-center justify-center rounded-lg bg-stone-800 cursor-pointer hover:bg-stratos-400 text-stratos-100 hover:text-stone-800">
        {dayNumber}
      </div>
    </div>
  );
}
