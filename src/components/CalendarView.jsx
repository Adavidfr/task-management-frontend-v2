import React from "react";

const Calendar = () => {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const dates = [
    "",
    "",
    "",
    "29",
    "30",
    "31",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "01",
    "02",
    "03",
    "04",
    "05",
  ];

  return (
    <div className="max-w-md mx-auto p-6 rounded-xl bg-gray-50 shadow-md mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Jan 2021</h2>
        <div className="flex gap-2">
          <button className="text-orange-500">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.293 15.707a1 1 0 010-1.414L15.586 11H4a1 1 0 110-2h11.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className="text-orange-500">
            <svg
              className="w-5 h-5 rotate-180"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.293 15.707a1 1 0 010-1.414L15.586 11H4a1 1 0 110-2h11.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center text-sm font-semibold text-gray-600 mb-2">
        {days.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2 text-center text-sm">
        {dates.map((date, index) => {
          // Simular estilos para días especiales
          const isToday = date === "05";
          const isDot = date === "03";
          const isMultiDot = date === "19";

          return (
            <div
              key={index}
              className="relative h-10 flex items-center justify-center"
            >
              {date && (
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full 
                  ${
                    isToday
                      ? "bg-orange-500 text-white font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  {date}
                </div>
              )}
              {isDot && (
                <div className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-orange-500" />
              )}
              {isMultiDot && (
                <div className="absolute bottom-1 flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
