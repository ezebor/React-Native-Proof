const BASE_URL = 'https://yts.lt/api/v2/';

class Api{
    async getSuggestions(id){
        try {
            let response = await fetch(
              `${BASE_URL}movie_suggestions.json?movie_id=${id}`,
            );
            let responseJson = await response.json();
            return responseJson.data.movies;
          } catch (error) {
            console.error(error);
          }
    }

    async getMovies(){
        try {
            let response = await fetch(
              `${BASE_URL}list_movies.json`,
            );
            let responseJson = await response.json();
            console.log("HOLIIS");
            console.log(responseJson.data.movies);
            console.log("HOLIIS");
            return responseJson.data.movies;
          } catch (error) {
            console.error(error);
          }
    }
}
 
export default new Api();