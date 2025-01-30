import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";  
import GradeCalculator from "./components/GradeCalculator";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/calculator" element={<GradeCalculator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
