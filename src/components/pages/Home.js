import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";


const Home = () => {
 const [trendingMoviesArray, setTrendingMoviesArray] = useState([]);
  const location = useLocation();


  useEffect(() => {
   const fetchMovies = async () => {

      try {
   
        const response = await axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=18e447cd4ab696665fa7fbc918675bb1");

        // console.log(response.data.results);
        const trendingMoviesArray = response.data.results;
        setTrendingMoviesArray(trendingMoviesArray);

      } catch (error) {
        console.error("Помилка при отриманні даних:", error);
        throw error;
      }
    }
    fetchMovies();
    }, []);



  return (
    <main>
      <h1>Trending today</h1>
      <ul>
      {trendingMoviesArray.map(movie => {
      return <li key={movie.id}><Link to={`/movies/${movie.id}`} state={{from: location}}>{movie.title}</Link></li> 
      })}
    </ul>
    </main>
  )
}

export default Home;