
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



 const Cast = () => {
   const { movieId } = useParams();
   const [movieCast, setMovieCast] = useState([]);
   
  useEffect(() => {
   const fetchCast = async () => {

      try {
   
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US&api_key=18e447cd4ab696665fa7fbc918675bb1`);
        const movieCast = response.data.cast;
        setMovieCast(movieCast);
        // console.log(movieCast);

      } catch (error) {
        console.error("Помилка при отриманні даних:", error);
        throw error;
      }
    }
    fetchCast();
  }, [movieId]);
  

  return (<ul>
      {movieCast.length > 0 ? (
      movieCast.map(({id, profile_path, name, character}) => <li key={id}>
        <img src={profile_path && (`https://image.tmdb.org/t/p/w200/${profile_path}`)} alt="" />
        <p>{name}</p>
        <p>Character: {character}</p>
      </li>)
      ) : (
        <li>No cast information available</li>
      )}
    </ul>)

}

export default Cast;


