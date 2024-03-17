import "./App.css";
import React from "react";
import CategorySelection from "./components/categorySelection";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Quiz from "./components/quiz";

function App() {
  return (
    <>
      <div className="main">
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<CategorySelection />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/quiz" element={<Navigate to={"/"} replace />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
