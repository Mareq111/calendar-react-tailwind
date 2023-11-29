import React from "react";
import DayName from "./DayName.jsx";

export default function AllDaysName() {
  return (
    <div className="flex flex-row justify-center items-center gap-10 p-4">
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
