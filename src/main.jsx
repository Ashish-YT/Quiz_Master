import { createBrowserRouter, RouterProvider } from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "../Components/Home";
import Navbar from "../Components/Navbar";
import TimeSelection from "../Components/TimeSelection";
import QuizPage from "../Components/QuizPage";
import ScorePage from "../Components/ScorePage";
import LearnMore from "../Components/LearnMore";

const router = createBrowserRouter([
  {
    path: "/options",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <App />
      </>
    ),
  },
  {
    path: "/options/time",
    element: (
      <>
        <Navbar />
        <TimeSelection></TimeSelection>
      </>
    ),
  },
  {
    path: "/quiz",
    element: (
      <>
        <Navbar />
        <QuizPage />
      </>
    ),
  },
  {
    path: "/quiz/score",
    element: (
      <>
        <Navbar />
        <ScorePage />
      </>
    ),
  },
  {
    path: "/learnMore",
    element: (
      <>
        <Navbar />
        <LearnMore />
      </>
    ),
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
