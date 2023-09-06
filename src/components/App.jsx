import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";

export const App = () => {


  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>} />
        <Route path="/movies/:movieId" element={<MovieDetails/>}>
        <Route path="/movies/:movieId/cast" element={<div>Cast</div>} />
        <Route path="/movies/:movieId/reviews" element={<div>Reviews</div>} />
        </Route>
      </Routes>
    </div>
  );
};
