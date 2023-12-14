import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./Index.jsx";
import Login from "./Login.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/index" element={<Index />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
