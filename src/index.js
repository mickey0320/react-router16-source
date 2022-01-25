import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "./react-router-dom";

import Home from "./container/Home";
import List from "./container/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
