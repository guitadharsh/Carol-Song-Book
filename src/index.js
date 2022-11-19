import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SongList from "./components/songlist/SongList";
import SongPage from "./components/songpage/SongPage";
import App from "./App";
import {  Routes, Route, BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/songs">
        <Route index element={<SongList/>} />
        <Route path=":songs" element={<SongPage/>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
