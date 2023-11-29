import React from "react";

export default function DayName(props) {
  const day = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  const dayIndex = props.day;
  const dayName = day[dayIndex];

  return (
    <>
      <h2 className=" font-semibold text-center text-lg text-stratos-100">
        {dayName}
      </h2>
    </>
  );
}
