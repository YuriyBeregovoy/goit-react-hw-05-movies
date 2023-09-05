import { useEffect, useState } from "react";
import axios from "axios";


const Home = () => {
 const [trendingMoviesArrea, setTrendingMoviesArrea] = useState([]);


  useEffect(() => {
   const fetchMovies = async () => {

      try {
   
        const response = await axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=18e447cd4ab696665fa7fbc918675bb1");

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



  return (<div>{trendingMoviesArrea.map(movie => {
    return <div key={movie.id}>{movie.title}</div> 
  })}</div>)
}

export default Home;