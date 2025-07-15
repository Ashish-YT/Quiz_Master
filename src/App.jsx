import { Link } from "react-router";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#2a18ed] via-[#2677a6] to-[#0c569c] flex items-center justify-center px-4 py-10">
      <div className="text-center max-w-2xl text-white space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Welcome to QuizMaster
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/90">
          Sharpen your knowledge with fun, interactive quizzes. Challenge
          yourself anytime, anywhere with different languages and difficulty
          levels.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
          <Link
            to="/options"
            className="px-6 py-3 bg-white text-[#2a18ed] font-semibold rounded-full shadow-md hover:scale-105 hover:bg-blue-100 transition"
          >
            Start Quiz
          </Link>
          <Link
            to="/learnMore"
            className="px-6 py-3 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-[#2a18ed] transition hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default App;
