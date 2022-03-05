import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";
import Movies from "./Components/Movies";
import "./App.css";
import BookMovie from "./Components/BookMovie";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/moviedetails" element={<MovieDetails />} />
        <Route path="/bookmovie" element={<BookMovie />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
