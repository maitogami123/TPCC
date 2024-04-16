import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/home/Home";
import MovieDetails from "./views/movieDetails/MovieDetails";
import Booking from "./views/booking/Booking";
import { Button } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:movieId" element={<MovieDetails />} />
        <Route path="/" element={<Home />} />
        <Route path="booking/:movieId" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
