import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Greeting from "./components/greeting";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/greeting">Random Greeting</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default App;
