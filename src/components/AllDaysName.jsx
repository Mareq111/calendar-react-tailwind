import React from "react";
import DayName from "./DayName.jsx";

export default function AllDaysName() {
  return (
    <div className="grid grid-cols-7 w-[22rem]">
      <DayName day={0} />
      <DayName day={1} />
      <DayName day={2} />
      <DayName day={3} />
      <DayName day={4} />
      <DayName day={5} />
      <DayName day={6} />
    </div>
  );
}
