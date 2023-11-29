import React from "react";
import "./App.css";
import DayName from "./components/DayName.jsx";
import AllDaysName from "./components/AllDaysName.jsx";

function App() {
  return (
    <>
      <main className="bg-stone-800 min-h-screen">
        <div className="bg-stone-600 p-[3rem]">
          <h1 className="text-stratos-50 bold text-3xl">Date</h1>
        </div>
        <AllDaysName />
        <hr className="flex justify-center items-center bg-stratos-200 w-100% mx-[4rem]" />
      </main>
    </>
  );
}

export default App;
