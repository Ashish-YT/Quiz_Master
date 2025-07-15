import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[linear-gradient(90deg,_rgba(42,24,237,1)_1%,_rgba(38,119,166,1)_47%,_rgba(12,86,156,1)_100%)] text-white sticky top-0">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">QuizMaster</div>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <ul className="hidden md:flex gap-6 font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <Link to="/options">
            <button class="w-32 h-7 rounded-full text-white font-semibold shadow-md transition duration-300 ease-in-out bg-[linear-gradient(90deg,_rgba(42,24,237,1)_1%,_rgba(38,119,166,1)_47%,_rgba(12,86,156,1)_100%)] hover:opacity-90 cursor-pointer">
              Get Started
            </button>
          </Link>
        </ul>
      </div>

      {open && (
        <ul className="md:hidden px-4 pb-4 space-y-2 font-medium">
          <li>
            <Link to="/" className="block">
              Home
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
