import React from "react";

export default function DayName(props) {
  const day = ["mo", "tu", "we", "th", "fr", "sa", "su"];
  const dayIndex = props.day;
  const dayName = day[dayIndex];

  return (
    <>
      <h2 className="text-center text-m text-stone-100">{dayName}</h2>
    </>
  );
}
