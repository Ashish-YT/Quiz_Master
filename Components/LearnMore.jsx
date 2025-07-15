import React from "react";
import { Link } from "react-router";

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-sky-700 to-cyan-600 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-center">
          About QuizMaster
        </h1>

        <p className="text-lg sm:text-xl text-white/90 text-center">
          QuizMaster is your personal coding companion designed to help you test
          and improve your knowledge of programming languages like C, C++, Java,
          Python, and JavaScript.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white text-blue-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <h2 className="text-xl font-bold mb-2">🧠 Learn While Playing</h2>
            <p>
              The quiz format makes learning engaging and competitive. You’ll be
              tested on important concepts in a fun, interactive way.
            </p>
          </div>

          <div className="bg-white text-blue-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <h2 className="text-xl font-bold mb-2">⏱️ Time-Based Challenges</h2>
            <p>
              Choose your challenge – 1, 5, or 10 minutes – and see how many
              questions you can tackle. Great for quick practice sessions!
            </p>
          </div>

          <div className="bg-white text-blue-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <h2 className="text-xl font-bold mb-2">
              💻 Multi-Language Support
            </h2>
            <p>
              Questions are available for C, C++, Java, Python, and JavaScript,
              making it perfect for beginners and advanced learners.
            </p>
          </div>

          <div className="bg-white text-blue-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <h2 className="text-xl font-bold mb-2">📊 Instant Results</h2>
            <p>
              Submit your quiz to get instant feedback on your performance.
              Review your score and improve your weak areas.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/"
            className="mt-6 inline-block px-6 py-3 bg-white text-blue-700 font-semibold rounded-full shadow hover:bg-blue-100 transition"
          >
            ⬅ Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
