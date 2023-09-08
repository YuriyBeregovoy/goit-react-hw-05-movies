
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";




const Reviews = () => {
   const { movieId } = useParams();
   const [movieReviews, setMovieReviews] = useState({});
   
  useEffect(() => {
   const fetchReviews = async () => {

      try {
   
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1&api_key=18e447cd4ab696665fa7fbc918675bb1`);
        const movieReviews = response.data.results;
        setMovieReviews(movieReviews);
        // console.log(movieReviews);

      } catch (error) {
        console.error("Помилка при отриманні даних:", error);
        throw error;
      }
    }
    fetchReviews();
  }, [movieId]);
  

  return (<ul>
      {movieReviews.length > 0 ? (
      movieReviews.map(({id, author, content}) => <li key={id}>
        <p>Author: {author}</p>
        <p>{content}</p>
      </li>)
      ) : (
        <li>We don`t have any reviews for this movie.</li>
      )}
    </ul>)



}
export default Reviews;