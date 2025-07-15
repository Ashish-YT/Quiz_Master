import React, { useState } from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const [selectedLang, setSelectedLang] = useState("");
  const navigate = useNavigate();

  const languages = ["C", "C++", "Java", "Python", "JavaScript"];

  return (
    <div className="min-h-screen bg-[linear-gradient(90deg,_rgba(49,134,168,1)_6%,_rgba(27,109,168,1)_43%,_rgba(0,195,255,1)_92%)] px-4 py-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold text-center mb-8">
        Choose a Language
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
        {languages.map((lang) => (
          <div
            key={lang}
            onClick={() => setSelectedLang(lang)}
            className={`cursor-pointer p-4 rounded-xl text-white text-center font-semibold shadow hover:scale-105 transition duration-200 ${
              selectedLang === lang
                ? "bg-green-600"
                : "bg-[linear-gradient(90deg,_rgba(42,24,237,1)_1%,_rgba(38,119,166,1)_47%,_rgba(12,86,156,1)_100%)]"
            }`}
          >
            {lang}
            {selectedLang === lang && <span className="ml-2">✔</span>}
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button
          className="px-8 py-3 text-lg sm:text-xl text-white font-bold rounded-full shadow-lg bg-[linear-gradient(90deg,_rgba(49,134,168,1)_6%,_rgba(27,109,168,1)_43%,_rgba(0,195,255,1)_92%)] disabled:opacity-50 hover:scale-105 transition"
          disabled={!selectedLang}
          onClick={() => navigate("/options/time", { state: { selectedLang } })}
        >
          🚀 Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Home;
