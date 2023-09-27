const token = "8qlOkxz4wq";

const request = {

    fetchNetflixOrinals: `api/movies/discover/tv?token=${token}`, //banner 
    
    fetchSearch: `api/movies/search?token=${token}`, 
    fetchTrending: `api/movies/trending?token=${token}`, //movie list 
    fetchToprated: `api/movies/top-rate?token=${token}`,//movie list

    fetchActionMovies: `api/movies/discover?genre=28&token=${token}`,//movie list
    fetchComedymovies: `api/movies/discover?genre=35&token=${token}`,//movie list
    fetchHorrorMovies: `api/movies/discover?genre=27&token=${token}`,//movie list
    fetchRomanceMovies: `api/movies/discover?genre=10749&token=${token}`,//movie list
    fetchDocumentaries: `api/movies/discover?genre=99&token=${token}` //movie list
    
}

export default request;