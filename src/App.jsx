import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
