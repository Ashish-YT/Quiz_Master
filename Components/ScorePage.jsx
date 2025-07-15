import React from "react";
import { useLocation, useNavigate } from "react-router";

const ScorePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { score = 0, total = 0 } = location.state || {};

  const getEmoji = () => {
    const percentage = (score / total) * 100;
    if (percentage === 100) return "🏆";
    if (percentage >= 80) return "🎉";
    if (percentage >= 50) return "👍";
    return "😅";
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-800 via-sky-600 to-cyan-400 px-6 py-10 text-white">
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg p-8 sm:p-12 max-w-lg w-full text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Quiz Completed {getEmoji()}
        </h1>
        <p className="text-lg sm:text-xl mb-6 font-medium tracking-wide">
          You scored{" "}
          <span className="text-3xl sm:text-4xl font-extrabold text-yellow-300">
            {score}
          </span>{" "}
          out of{" "}
          <span className="text-2xl sm:text-3xl font-bold text-white/80">
            {total}
          </span>
        </p>

        <div className="w-full flex justify-center">
          <button
            onClick={() => navigate("/")}
            className="mt-4 bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition text-lg"
          >
            🔁 Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScorePage;
