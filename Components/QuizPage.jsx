import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import cQuestions from "../new folder/cQuestions";
import cppQuestions from "../new folder/cppQuestions";
import javaQuestions from "../new folder/javaQuestions";
import javascriptQuestions from "../new folder/javascriptQuestions";
import pythonQuestions from "../new folder/pythonQuestions";

const QuizPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { time, selectedLang } = location.state || {};

  const [selectedOptions, setSelectedOptions] = useState({});
  const [questions, setQuestions] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(time * 60);

  const totalCount = time === 1 ? 10 : time === 5 ? 30 : 50;

  // ✅ Shuffle questions AND their options
  useEffect(() => {
    const shuffleArray = (array) => array.sort(() => 0.5 - Math.random());

    // 🔁 Choose based on selectedLang
    let questionPool = [];
    if (selectedLang === "C++") {
      questionPool = cppQuestions;
    } else if (selectedLang === "C") {
      questionPool = cQuestions;
    } else if (selectedLang === "Java") {
      questionPool = javaQuestions;
    } else if (selectedLang === "JavaScript") {
      questionPool = javascriptQuestions;
    } else if (selectedLang === "Python") {
      questionPool = pythonQuestions;
    }

    const shuffledQuestions = shuffleArray([...questionPool]).slice(
      0,
      totalCount
    );

    const randomized = shuffledQuestions.map((q) => ({
      ...q,
      options: shuffleArray([...q.options]),
    }));

    setQuestions(randomized);
  }, [time, selectedLang]);

  // Timer countdown
  useEffect(() => {
    if (secondsLeft <= 0) {
      handleSubmit(); // auto submit
      return;
    }

    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft]);

  const handleOptionSelect = (qIndex, option) => {
    if (selectedOptions[qIndex]) return;
    setSelectedOptions((prev) => ({ ...prev, [qIndex]: option }));
  };

  const handleSubmit = () => {
    let score = 0;
    questions.forEach((q, i) => {
      if (selectedOptions[i] === q.answer) score++;
    });

    navigate("/quiz/score", {
      state: {
        score,
        total: questions.length,
        selectedLang,
      },
    });
  };

  const formatTime = () => {
    const min = Math.floor(secondsLeft / 60)
      .toString()
      .padStart(2, "0");
    const sec = (secondsLeft % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-sky-700 to-cyan-600 text-white pb-12">
      {/* Sticky Timer */}
      <div className="sticky top-0 z-50 backdrop-blur bg-blue-950/80 border-b border-white/10 px-6 py-4 flex justify-between items-center shadow-md">
        <h2 className="text-xl sm:text-2xl font-bold tracking-wide">
          Quiz: {selectedLang}
        </h2>
        <span
          className={`text-lg sm:text-xl font-mono px-4 py-2 rounded-lg shadow transition ${
            secondsLeft <= 30
              ? "bg-red-600 text-white animate-pulse"
              : "bg-white text-blue-700"
          }`}
        >
          ⏳ {formatTime()}
        </span>
      </div>

      {/* Questions */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-8">
        {questions.map((q, idx) => (
          <div
            key={idx}
            className="mb-8 bg-white text-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition"
          >
            <h4 className="font-semibold text-lg sm:text-xl mb-4">
              {idx + 1}. {q.question}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {q.options.map((opt, oIdx) => {
                const isSelected = selectedOptions[idx] === opt;
                const isDisabled = !!selectedOptions[idx];

                return (
                  <button
                    key={oIdx}
                    onClick={() => handleOptionSelect(idx, opt)}
                    disabled={isDisabled}
                    className={`p-3 rounded-lg border font-medium text-left transition duration-200 ${
                      isSelected
                        ? "bg-blue-600 text-white border-blue-600 scale-[1.02]"
                        : isDisabled
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-gray-50 hover:bg-blue-100 hover:text-blue-800"
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        {/* Submit */}
        <div className="text-center mt-10">
          <button
            onClick={handleSubmit}
            className="bg-white text-blue-700 text-lg px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 hover:bg-blue-100 transition"
          >
            ✅ Submit Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
