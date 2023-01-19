import { SHORTMOVIE_DURATION } from "./Constants";

function handleSearch(movies, searchKeyword) {
  let searchResult = [];
  const searchKeywordNormalize = searchKeyword.toLowerCase().trim();
  movies.forEach((movie) => {
    const movieRuNormalize = String(movie.nameRU).toLowerCase().trim();
    const movieEnNormalize = String(movie.nameEN).toLowerCase().trim();
    if (
      movieRuNormalize.indexOf(searchKeywordNormalize) !== -1 ||
      movieEnNormalize.indexOf(searchKeywordNormalize) !== -1
    ) {
      return searchResult.push(movie);
    }
  });
  return searchResult;
}

function handleFilterShortMovies(movies) {
  return movies.filter((movie) => movie.duration < SHORTMOVIE_DURATION);
}

function filterMovies(movies, searchKeyword, shortMoviesChecked) {
  const searchResult = handleSearch(movies, searchKeyword);
  if (shortMoviesChecked) {
    return handleFilterShortMovies(searchResult);
  } else {
    return searchResult;
  }
}

// получение ссылки для карточки фильма
function getImage(movie) {
  if (movie.thumbnail) {
    return movie.thumbnail;
  } else {
    return `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`;
  }
}

function getUserMovieCard(userMovies, movie) {
  return userMovies.find((item) => {
    return (
      Number(item.movieId) === Number(movie.movieId) ||
      Number(item.movieId) === Number(movie.id)
    );
  });
}

export { filterMovies, getImage, getUserMovieCard };
