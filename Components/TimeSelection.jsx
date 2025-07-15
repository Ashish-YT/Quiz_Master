import React from "react";
import { useNavigate, useLocation } from "react-router";

const TimeSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedLang = location.state?.selectedLang;

  const selectTime = (time) => {
    navigate("/quiz", { state: { selectedLang, time } });
  };

  if (!selectedLang) {
    return (
      <p className="text-center text-red-600 mt-10 text-lg">
        No language selected. Please go back.
      </p>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 sm:px-6 bg-[linear-gradient(90deg,_rgba(49,134,168,1)_6%,_rgba(27,109,168,1)_43%,_rgba(0,195,255,1)_92%)] text-white">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center">
        Select Time for <span className="capitalize">{selectedLang}</span> Quiz
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-md">
        {[1, 5, 10].map((min) => (
          <button
            key={min}
            onClick={() => selectTime(min)}
            className="w-full bg-white text-[#3186a8] font-semibold text-lg px-6 py-4 rounded-xl shadow-lg hover:scale-105 hover:bg-blue-100 transition"
          >
            {min} Minute{min > 1 ? "s" : ""}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeSelection;
