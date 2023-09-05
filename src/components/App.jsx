import { NavLink, Route, Routes } from "react-router-dom";

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
        <Route path="/" element={<div></div>}/>
        <Route  path="/movies" element={<div></div>}/>
      </Routes>
    </div>
  );
};
