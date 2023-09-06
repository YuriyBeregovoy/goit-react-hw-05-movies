
import { useEffect, useState } from "react";
import axios from "axios";
// import Notiflix from 'notiflix';
import { Link } from "react-router-dom";


const Movies = () => {
 const [searchMoviesArray, setSearchMoviesArray] = useState([]);
  const [searchQuery, setsearchQuery] = useState("");
  
  const changeQuery = (newQuery) => {
    if (newQuery !== "") {
      setsearchQuery(newQuery);
      setSearchMoviesArray([]);
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      if (searchQuery) {

        try {
   
          const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1&api_key=18e447cd4ab696665fa7fbc918675bb1`);

          console.log(response.data.results);
          const searchMoviesArray = response.data.results;
          setSearchMoviesArray(searchMoviesArray);

        } catch (error) {
          console.error("Помилка при отриманні даних:", error);
          throw error;
        }
      }
     
    }
     fetchMovies();
    }, [searchQuery]);



  return (
    <main>
      <form onSubmit={evt => {
        evt.preventDefault();
        const searchQuery = evt.target.elements.query.value.trim();
        if (searchQuery) { changeQuery(searchQuery); } else {
          // Notiflix.Notify.failure('Please enter a valid search query.');
        }
        evt.target.reset();
      }}>
          <input type="text" name="query" placeholder="Search movies..."/>
          <button type="submit">Search</button>
      </form>
       <ul>
          
        {searchMoviesArray.map(movie => {
        return <li key={movie.id}><Link to={`${movie.id}`}>{movie.title}</Link></li> 
        })}
          
      </ul>
    </main>
  )
}

export default Movies;









