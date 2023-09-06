import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Home = () => {
 const [trendingMoviesArrea, setTrendingMoviesArrea] = useState([]);


  useEffect(() => {
   const fetchMovies = async () => {

      try {
   
        const response = await axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=18e447cd4ab696665fa7fbc918675bb1");

        console.log(response.data.results);
        const trendingMoviesArray = response.data.results;
        setTrendingMoviesArrea(trendingMoviesArray);

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
      <div>
      {trendingMoviesArrea.map(movie => {
      return <Link key={movie.id} to={`${movie.id}`}>{movie.title}</Link> 
      })}
    </div>
    </main>
  )
}

export default Home;