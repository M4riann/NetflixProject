const API_KEY = process.env.REACT_APP_TMDB_KEY

const ActionGenresPages = {
  fetchActionPage2 : `https://api.themoviedb.org/3/discover/movie?page=2&api_key=${API_KEY}&with_genres=28`,
  fetchActionPage3 :`https://api.themoviedb.org/3/discover/movie?page=3&api_key=${API_KEY}&with_genres=28`,
  fetchActionPage4 :`https://api.themoviedb.org/3/discover/movie?page=4&api_key=${API_KEY}&with_genres=28`,
  fetchActionPage5 :`https://api.themoviedb.org/3/discover/movie?page=5&api_key=${API_KEY}&with_genres=28`,
}

export default ActionGenresPages