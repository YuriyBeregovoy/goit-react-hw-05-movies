import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

export const App = () => {

  // const KEY = '18e447cd4ab696665fa7fbc918675bb1';
  // const readAccessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGU0NDdjZDRhYjY5NjY2NWZhN2ZiYzkxODY3NWJiMSIsInN1YiI6IjY0ZjQ1YzE0Y2FhNTA4MDBhYjczNjE1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6vt_mYcbEyyitdAlRBqukGv8W-Hk2KsX0x7BkYzF7R0"




  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<div>Movies</div>} />
        <Route path="/movies/:movieId" element={<div>MovieDetails</div>}>
          <Route path="/movies/:movieId/cast" element={<div>Cast</div>} />
          <Route path="/movies/:movieId/reviews" element={<div>Reviews</div>} />
        </Route>
      </Routes>
    </div>
  );
};
