import React from "react";
import "./App.css";
import DayName from "./components/DayName.jsx";
import AllDaysName from "./components/AllDaysName.jsx";
import Calendar from "./components/calendar/Calendar.jsx";

function App() {
  return (
    <>
      <main className="flex flex-cols bg-stone-800 min-h-screen">
        <div className="bg-stratos-200 p-[3rem]">
          <h1 className="text-stone-700 font-semibold text-3xl">Date</h1>
        </div>
        {/* calendar */}
        <div className=" border-8 rounded-r-lg border-stratos-200 flex flex-col justify-center items-center gap-2 pt-4 w-1/2" >
        <AllDaysName />
          <hr className="grid grid-cols-7 w-[22rem] border-stratos-300" />
          <Calendar />
        </div>
      </main>
    </>
  );
}

export default App;
