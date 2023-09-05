


axios.defaults.baseURL = "https://api.themoviedb.org/3/movie"

export const fetchMovies = async () => {

 try {
   
   const response = await axios.get(`/550?api_key=18e447cd4ab696665fa7fbc918675bb1`);
  console.log(response.data);

   return response.data;
  } catch (error) {
    console.error("Помилка при отриманні даних:", error);
    throw error;
  }
 
}

