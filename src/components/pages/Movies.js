
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { ButtonForm, InputStyle, SearchForm } from "./Movies.styled";


const Movies = () => {
  const [searchMoviesArray, setSearchMoviesArray] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const location = useLocation();
  // console.log(location);
  

  useEffect(() => {
    const fetchMovies = async () => {
      if (query) {

        try {
   
          const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=18e447cd4ab696665fa7fbc918675bb1`);

          // console.log(response.data.results);
          const searchMoviesArray = response.data.results;
          setSearchMoviesArray(searchMoviesArray);

        } catch (error) {
          console.error("Помилка при отриманні даних:", error);
          throw error;
        }
      }
     
    }
     fetchMovies();
    }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = e.target.elements.query.value.trim();
    if (searchQuery === "") { return setSearchParams({}); }
    setSearchParams({ query: searchQuery });
     e.target.reset();
  };

  return (
    <main>
      <SearchForm onSubmit={handleSubmit}>
        <InputStyle type="text" name="query" placeholder="Search movies..."/>
        <ButtonForm type="submit">Search</ButtonForm>
      </SearchForm>
       <ul>
        {searchMoviesArray.map(movie => {
        return <li key={movie.id}><Link to={`${movie.id}`} state={{ from: location }}>{movie.title}</Link></li> 
        })}
      </ul>
    </main>
  )
}

export default Movies;


