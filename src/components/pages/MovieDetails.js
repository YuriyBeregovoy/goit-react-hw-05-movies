import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const MovieDetails = () => {


  const {movieId} = useParams();
  const [movieDetails, setMovieDetails] = useState({});


  useEffect(() => {
   const fetchMovies = async () => {

      try {
   
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=18e447cd4ab696665fa7fbc918675bb1`);
        const movieDetails = response.data;
        setMovieDetails(movieDetails);
        console.log(movieDetails)
      } catch (error) {
        console.error("Помилка при отриманні даних:", error);
        throw error;
      }
    }
    fetchMovies();
    }, [movieId]);

        const { title, release_date, poster_path, vote_average, overview, genres=[]} = movieDetails;
  console.log(genres);
  return (
    
    <main>
      <h1>{title}</h1>
      <img src={`https://image.tmdb.org/t/p/w400/${poster_path}`} alt="" />
      <p>User Score: {Math.round(vote_average * 10)}%</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h3>Genres</h3>
      <ul>{genres.map(ganre => { return <li key={ganre.id} >{ganre.name}</li> })}</ul>
      <div>
        <ul>
          <li>
            <Link to={`/movies/:movieId/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/:movieId/reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>
    </main>
  )
};

export default MovieDetails;